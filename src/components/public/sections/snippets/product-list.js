'use client'

import { useEffect, useState } from 'react'
import { gtProducts } from '../../../../lib/actions/products/getProducts'


export default function ProductList({ label }) {

    const [products, setProducts] = useState(null)

    useEffect(() => {

        const getProds = async () => {
            try {
                let products = await gtProducts(null, label, 3);
                setProducts(products)
            } catch (error) {
                console.log(error)
            }
        }

        getProds();
    }, [])



    return (
        <div className='single-product-list-wrapper'>
            <div className='single-product-list-inner'>
                {
                    products && products.map((product, key) => (
                        <div className='single-list-product' key={key}>
                            <div className='single-list-product-inner flex align-center justify-start'>
                                <div className='p-4'>
                                    {product.main_image_url && (<img className="w-20 h-20 object-cover" src={product.main_image_url} />)}
                                </div>
                                <div className='p-4'>
                                    {product.name && (
                                        <p className="p-2">{product.name}</p>
                                    )}
                                     {product.sale_price && (
                                        <div className="flex justify-start gap-2 items-center">
                                            <p className="p-1 text-red-800">{product.sale_price}</p>
                                            <p className="line-through">{product.regular_price}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
