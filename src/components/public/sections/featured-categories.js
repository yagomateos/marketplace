'use client'

import { useEffect, useState } from 'react';
import { getfeaturedCategories } from '../../../lib/actions/products/categories';
import { useRouter } from 'next/navigation';

export default function FeaturedCategories() {

    const [categories, setCategories] = useState();
    const router = useRouter()

    useEffect(() => {
        const getCats = async () => {
            console.log('comes here')
            try {
                const categoriesList = await getfeaturedCategories(4)
                console.log(categoriesList)
                setCategories(categoriesList);

            } catch (error) {
                console.log(error)
            }
        }

        getCats();

    }, [])



    return (
        <div className="container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8">
            {/* header */}
            <div className="flex justify-between align-center pb-5">
                <div>
                    <h2 className="text-2xl font-medium">Categorías Destacadas</h2>
                </div>
                <div>
                    <a href="#" className="text-sm underline">Ver todas las categorías</a>
                </div>
            </div>

            {/* content */}

            {categories && (
                <div className="featured-categories-wrapper overflow-hidden w-full py-4 relative">
                    <div className="featured-categories-inner flex justify-between items-center flex-wrap lg:gap-8">
                        {categories && categories.map((category, key) => (
                            <div className="single-category-item  text-center w-1/2 lg:w-auto p-4 lg:p-0" key={key}>
                                <div className="single-category-inner flex justify-center flex-col items-center">
                                    {category.category_image && (
                                        <a className='text-sm underline mt-3 cursor-pointer' onClick={(e)=>{e.preventDefault(); router.push(`/categorias?catid=${category.id}`)}}><img className=" rounded-full h-32 w-32 lg:h-60 lg:w-60" src={category.category_image} /></a>
                                    )}

                                    {category.category_name && (
                                        <p className="text-sm mt-5 leading-3 font-semibold lg:text-xl">{category.category_name}</p>
                                    )}

                                    <a className='text-sm underline mt-3 cursor-pointer' onClick={(e)=>{e.preventDefault(); router.push(`/categorias?catid=${category.id}`)}}>Compra ahora</a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}
