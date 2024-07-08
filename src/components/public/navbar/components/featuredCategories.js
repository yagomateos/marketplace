'use client'

import { useEffect, useState } from "react"
import SubCategories from "./subCategories";


export default function Featuredcategories({ featuredCategories }) {

    const [selectedCat, setSelectedCat] = useState(null)
    const [openSub, setOpenSub] = useState(false)
    const [selectedCatDta, setSelectedCatDta] = useState(null)

    const checkMobileMenuOpen = (e) => {

        e.preventDefault();
        if (window.innerWidth < 1023) {
            setOpenSub(!openSub)
        }
    }

    useEffect(() => {
        console.clear()
        console.log(selectedCat)
        if (featuredCategories) {
            const selectedCatData = featuredCategories.filter((featuredCat) => {
                return featuredCat.id === selectedCat
            })

            setSelectedCatDta(selectedCatData)
            console.log(selectedCatData)
        }
    }, [selectedCat])


    useEffect(() => {
        featuredCategories?.[0]?.id ? setSelectedCat(featuredCategories[0].id) : setSelectedCat(null);
    }, [])

    return (
        <div className='fixed lg:absolute w-full lg:w-3/4 py-6 bg-white drop-shadow-md shadow-slate-600 z-50 left-0 top-auto bottom-0 lg:bottom-auto h-5/6 lg:h-auto lg:top-20 lg:rounded-lg kd-nav-popup-wrapper'>
            <div className="caret-icon absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <span className="caret-icon-icon"></span>
            </div>
            <div className="flex justify-between">

                <ul className={`${openSub && 'hidden'} w-full lg:w-2/5 h-full overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
                    {featuredCategories && featuredCategories.map((category, key) => (
                        <li className='text-sm block' key={key}><a onClick={e => checkMobileMenuOpen(e)} onMouseEnter={() => setSelectedCat(category.id)} className="p-4 flex justify-between items-center hover:bg-gray-100" href="/"><span>{category.category_name}</span> <img className="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/angle-right.svg" /></a></li>
                    ))}
                </ul>

                <div className={`${!openSub && 'hidden'} lg:block P-6 w-full lg:w-3/5`}>
                    {selectedCat && selectedCatDta && <SubCategories parentId={selectedCat} parentDta={selectedCatDta} mobileOpen = {openSub} setMobileOpen = {setOpenSub} />}
                </div>
            </div>
        </div>
    )
}
