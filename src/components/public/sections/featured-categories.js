'use client'

import { useEffect, useState } from 'react';
import { getfeaturedCategories } from '../../../lib/actions/products/categories';

export default function FeaturedCategories() {

    const [categories, setCategories] = useState();

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
                    <h2 className="text-2xl font-medium">Featured Categories</h2>
                </div>
                <div>
                    <a href="#" className="text-sm underline">See all categories</a>
                </div>
            </div>

            {/* content */}

            {categories && (
                <div className="featured-categories-wrapper overflow-hidden w-full py-4 relative">
                    <div className="featured-categories-inner flex justify-between items-center gap-8">
                        {categories && categories.map((category, key) => (
                            <div className="single-category-item  text-center" key={key}>
                                <div className="single-category-inner">
                                    {category.category_image && (
                                        <img className=" rounded-full h-24 w-24 lg:h-60 lg:w-60" src={category.category_image} />
                                    )}

                                    {category.category_name && (
                                        <p className="text-xl">{category.category_name}</p>
                                    )}

                                    <a className='text-sm underline'>Shop Now</a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}