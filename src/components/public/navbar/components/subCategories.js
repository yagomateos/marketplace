'use client'

import { useEffect, useState } from "react"
import { getSubCats } from '../../../../lib/actions/products/categories'
import './subCategories.css'

export default function SubCategories({ parentId, parentDta = null, mobileOpen, setMobileOpen }) {

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
        <>
            {mobileOpen && (
                <div className="relative">
                    <span onClick={e => setMobileOpen(false)} className="absolute top-[50%] left-3 translate-y-[-50%]"><img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/caret-left.svg" /></span>
                    <h3 className="text-center text-xl font-light">{parentDta[0].category_name}</h3>
                </div>
            )}
            <div className="flex gap-4 p-4 flex-wrap">
                {categoryList && categoryList.map((cat, key) => (
                    <div key={key} className="border-b border-[#ccc] lg:border-b-0 flex lg:block mb-2 lg:mb-0 lg:rounded-xl  p-3 cursor-pointer kd-single-sub-category w-[47%] lg:w-[31%]">
                        <a href={`/categorias?catid=${cat.id}`}>
                            <img className="w-full" src={cat.category_image} />
                            <p className="text-sm mt-3">{cat.category_name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}
