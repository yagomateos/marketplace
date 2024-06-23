'use client'

import { useEffect, useState } from "react"
import { getSubCats } from '../../../../lib/actions/products/categories'
import './subCategories.css'

export default function SubCategories({ parentId }) {

    const [categoryList, setCategoryList] = useState(null);

    useEffect(() => {
       
        const getSubCatFunc = async () => {
            try {
                const subCategories = await getSubCats(parentId)
            
                setCategoryList(subCategories)
            } catch (error) {
                console.log(error)
            }
        }
        getSubCatFunc();
    }, [parentId])


    return (
        <div className="flex gap-4 p-4">
            {categoryList && categoryList.map((cat, key) => (
                <div key={key} className="rounded-xl  p-3 cursor-pointer kd-single-sub-category">
                    <img className="w-full" src={cat.category_image} />
                    <p className="text-sm mt-3">{cat.category_name}</p>
                </div>
            ))}
        </div>
    )
}
