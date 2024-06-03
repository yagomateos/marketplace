'use client'

import { useEffect, useState } from "react"
import { getSubCats } from '../../../../lib/actions/products/categories'

export default function SubCategories({ parentId }) {

    const [categoryList, setCategoryList] = useState(null);

    useEffect(() => {
        console.clear();
        console.log(parentId)
        const getSubCatFunc = async () => {
            try {
                const subCategories = await getSubCats(parentId)
                console.clear();
                console.log(subCategories)
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
                <div key={key} className="rounded-xl">
                    <img className="w-full" src={cat.category_image} />
                    <p className="text-sm mt-3">{cat.category_name}</p>
                </div>
            ))}
        </div>
    )
}
