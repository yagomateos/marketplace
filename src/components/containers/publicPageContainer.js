'use client'

import React, { useState } from 'react'
import PublicNavbar from '../public/navbar/page'
import Footer from '../public/footer/page'
import './pageContainer.css'

export default function PublicPageContainer({ children }) {
    const [categoriesMenuOpen, setCatMenuOpen] = useState(false)


    return (
        <>
            <PublicNavbar categoriesMenuOpen={categoriesMenuOpen} setCatMenuOpen={setCatMenuOpen} />
            <div className="py-6 relative">
                {categoriesMenuOpen&&(
                    <div className='dropdownOverlay' onClick={()=>{setCatMenuOpen(false)}}></div>
                )}
                {children}
            </div>
            <Footer />
        </>
    )
}
