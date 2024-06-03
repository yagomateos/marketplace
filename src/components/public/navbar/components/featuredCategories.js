'use client'

import { useEffect, useState } from "react"
import SubCategories from "./subCategories";


export default function Featuredcategories({ featuredCategories }) {

    const [selectedCat, setSelectedCat] = useState(null)

    useEffect(() => {
        featuredCategories?.[0]?.id ? setSelectedCat(featuredCategories[0].id) : setSelectedCat(null);
    }, [])

    return (
        <div className='absolute w-2/4 py-6 bg-white drop-shadow-md shadow-slate-600 h-96 z-50 left-0 top-20 rounded-lg overflow-hidden'>
            <div className="flex justify-between">
                <ul className="w-2/5 max-h-80 overflow-y-scroll overflow-x-hidden scrollbar-thin">
                    {featuredCategories && featuredCategories.map((category, key) => (
                        <li className='text-sm block' key={key}><a onMouseEnter={()=>setSelectedCat(category.id)} className="p-4 flex justify-between items-center hover:bg-gray-100" href="/"><span>{category.category_name}</span> <img className="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/angle-right.svg" /></a></li>
                    ))}
                </ul>

                <div className="P-6 w-3/5">
                    {selectedCat&&<SubCategories parentId={selectedCat} />}
                </div>
            </div>
        </div>
        // <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 justify-between items-left lg:items-center w-full">
        //     {featuredCategories && featuredCategories.map((category, key) => (
        //         <li className='text-sm' key={key}><a href="/">{category.category_name}</a></li>
        //     ))}
        // </ul>
    )
}
