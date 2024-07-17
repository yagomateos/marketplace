'use client'
import React, { useEffect, useState } from 'react'
import { getCatsById } from '../../../../lib/actions/products/categories'
import SingleStoreproduct from '../../../../components/public/sections/snippets/singleStoreProduct'

export default function StoreTabs({ storeInfo }) {
    console.log(storeInfo)
    const [openedTab, setOpenedTab] = useState('products')
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [catNames, setCatNames] = useState([])
    const [selectedCat, setSelectedCat] = useState('all')
    const [reviews, setReviews] = useState([])

    // create products and category arrays
    useEffect(() => {
        // unique info based on product
        const uniqueStoreInfo = storeInfo.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.product_id === item.product_id
            ))
        );
        const productsList = [...products]
        const categoriesList = [...categories]

        uniqueStoreInfo && uniqueStoreInfo.forEach(uniqueProd => {
            productsList.push({ id: uniqueProd.product_id, product_type: uniqueProd.product_type, regular_price: uniqueProd.regular_price, img_url: uniqueProd.main_image_url, name: uniqueProd.name, sale_price: uniqueProd.sale_price, category_id: uniqueProd.category_id })
            if (categoriesList.indexOf(uniqueProd.category_id) === -1) {
                categoriesList.push(uniqueProd.category_id)
            }
        });

        setProducts(productsList)
        setCategories(categoriesList)

        // unique info based on reviews
        const uniqueReviews = storeInfo.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.t_id === item.t_id
            ))
        );

        console.log(uniqueReviews)
        const reviewsList = [...reviews];

        uniqueReviews && uniqueReviews.forEach(review => {
            reviewsList.push({ user_name: review.user_name, title: review.title, review: review.review, star: review.star, created_at: review.created_at, product_id: review.product_id })
        })

        // console.clear();
        setReviews(reviewsList)

    }, [storeInfo])

    // get categories
    useEffect(() => {
        const getCatNames = async () => {
            try {
                const cateNames = await getCatsById(categories.join(','))

                setCatNames(cateNames)
            } catch (error) {
                console.log(error)
            }

        }

        if (categories.length > 0) {
            getCatNames()
        }
    }, [categories])

    // console.log(products.length)

    const getReviewsProduct = (review) => {
        if (products) {
            const selectedProduct = products.filter((item) => review.product_id === item.id);
            if (selectedProduct.length > 0) {
                return (
                    <div>
                        <a href={`/listado?pid=${selectedProduct[0].id}`} className='flex gap-5 items-center'>
                            <img className='w-16' src={selectedProduct[0].img_url} alt="Product" />
                            <p>{selectedProduct[0].name}</p>
                        </a>
                    </div>
                );
            } else {
                console.log("No matching product found.");
                return null; // Return null if no matching product is found
            }
        } else {
            console.log("Products array is empty.");
            return null; // Return null if products array is empty
        }
    };

    return (
        <div className='py-5 max-w-7xl mr-auto ml-auto'>

            {/* tab titles */}
            <div className='flex justify-between items-center py-5 flex-col lg:flex-row'>
                <ul className='flex gap-5'>
                    <li className={`py-3 ${openedTab == 'products' ? 'active border-b border-[black] cursor-pointer' : ''}`} onClick={e => { setOpenedTab('products') }}><a href="#products-info" className='cursor-pointer'>Artículos</a></li>
                    <li className={`py-3 ${openedTab == 'reviews' ? 'active border-b border-[black] cursor-pointer' : ''}`} onClick={e => { setOpenedTab('reviews') }}><a href="#reviews" className='cursor-pointer'>Reseñas</a></li>
                    <li className={`py-3 ${openedTab == 'info' ? 'active border-b border-[black] cursor-pointer' : ''}`} onClick={e => { setOpenedTab('info') }}><a href="#basic-info" className='cursor-pointer'>Información básica</a></li>
                </ul>
                <div className='w-full mt-3 p-2 lg:p-5 lg:w-auto'>
                    <input className='w-full lg:w-auto p-2 lg:p-4 rounded-full border border-[#ccc]' placeholder='Buscar' />
                </div>
            </div>

            {/* tab content */}
            <div id='products-info' className='py-5'>
                <div className='flex'>
                    <div className='lg:w-[20%] hidden lg:block'>
                        {/* product categories */}
                        <div className='pr-4 border-r-2 border[#ccc]'>
                            {/* add categories here */}
                            <ul>
                                <li><a className='cursor-pointer py-2 w-full flex justify-between' onClick={(e) => setSelectedCat('all')}><span>Todos</span> <span>{products && (products.length)}</span></a></li>
                                {catNames && catNames.map((cat, key) => (
                                    <li key={key}><a className='cursor-pointer py-2 w-full flex justify-between' onClick={(e) => setSelectedCat(cat.id)}><span>{cat.category_name}</span> <span>{/*add the number of products*/}</span></a></li>
                                ))}
                            </ul>
                        </div>

                        {/* contact store owner */}
                        <div className='mt-8'>
                            <a className='w-full p-2 border block border-[black] text-sm text-centerfont-semibold'>Contactar con el propietario de la tienda</a>
                        </div>
                    </div>
                    <div className='lg:w-[80%] px-8 py-2'>
                        <h3 className='text-xl mb-6'>Artículos</h3>
                        <div className='flex gap-4'>
                            {products && products.map((product, key) => (
                                <div className={`w-[48%] lg:w-[24%] ${selectedCat != 'all' && selectedCat != product.category_id ? 'hidden' : ''}`} key={key}>
                                    <SingleStoreproduct product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* reviews */}
            <div id="reviews" className='py-5 px-5 lg:px-0'>
                <div className='lg:flex'>
                    <div className='lg:w-[20%]'>
                        <h3 className='text-xl'>Reseñas</h3>
                    </div>
                    <div className='lg:w-[80%]'>
                        {
                            reviews && reviews.map((review, key) => (
                                <div key={key} className='mb-3 py-3 border-b border-[#ccc]'>
                                    <h4>{review.user_name} <small></small></h4>
                                    <ul className='flex'>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <li className='text-2xl' key={index}>
                                                {index < review.star ? '★' : '☆'}
                                            </li>
                                        ))}
                                    </ul>
                                    <p>{review.review}</p>

                                    {/* product */}
                                    {getReviewsProduct(review)}

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* basic info */}
            <div id="basic-info" className='py-5 px-5 lg:px-0'>
                <div className='lg:flex'>
                    <div className='lg:w-[20%]'>
                        <h3 className='text-xl'>Presentación </h3>
                    </div>
                    <div className='lg:w-[80%]'>
                        {console.log(storeInfo[0])}
                        {storeInfo && storeInfo[0] && (
                            <div dangerouslySetInnerHTML={{ __html: storeInfo[0].full_description }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
