'use client'

import { useState } from 'react'
import ProductList from './snippets/product-list'
import './home-product-columns.css'


export default function HomeProductColumns() {

const [openedProds , setOpenedProds] = useState('featured')

    return (
        <>
            <div className='lg:hidden w-full overflow-hidden p-6 box-border'>
                <div className='product-columns-mobile overflow-x-auto w-full flex gap-4 items-center box-border'>
                        <div className={`py-4 ${openedProds=='featured'? 'border-b border-[#000]' : ''}`} onClick={()=>{setOpenedProds('featured')}}>
                            <h3 className="w-max font-semibold text-base">Featured products</h3>
                        </div>
                        <div className={`py-4 ${openedProds=='mostViewed'? 'border-b border-[#000]' : ''}`} onClick={()=>{setOpenedProds('mostViewed')}}>
                            <h3 className="w-max font-semibold text-base">Most-viewed Items</h3>
                        </div>
                        <div className={`py-4 ${openedProds=='suggested'? 'border-b border-[#000]' : ''}`} onClick={()=>{setOpenedProds('suggested')}}>
                            <h3 className="w-max font-semibold text-base">We Think You&apos;ll Love</h3>
                        </div>
                </div>
            </div>

            <div className="container mx-auto lg:my-8 lg:px-4 pb-4 max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between align-center gap-6">
                    <div className={`w-full ${openedProds!='featured'? 'hidden' : ''} lg:block lg:border-r border-[#f2f2f2]`}>
                        <h3 className="hidden lg:block font-semibold text-lg">Featured products</h3>
                        <ProductList label="featured" />
                    </div>
                    <div className={`w-full ${openedProds!='mostViewed'? 'hidden' : ''} lg:block pt-4 lg:pt-0 lg:border-r border-[#f2f2f2]`}>
                        <h3 className="hidden lg:block font-semibold text-lg">Most-viewed Items</h3>
                        <ProductList label="mostViewed" />
                    </div>
                    <div className={`w-full ${openedProds!='suggested'? 'hidden' : ''} lg:block pt-4 lg:pt-0 `}>
                        <h3 className="hidden lg:block font-semibold text-lg">We Think You&apos;ll Love</h3>
                        <ProductList label="recommanded" />
                    </div>
                </div>
            </div>
        </>

    )
}
