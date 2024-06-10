'use client'

import React, { useState } from 'react'
import PublicNavbar from '../public/navbar/page'
import Footer from '../public/footer/page'
import './pageContainer.css'

export default function PublicPageContainer({ children }) {
    const [categoriesMenuOpen, setCatMenuOpen] = useState(false)


    return (
        <>
            <div className="relative">
                {categoriesMenuOpen && (
                    <div className='dropdownOverlay' onClick={() => { setCatMenuOpen(false) }}></div>
                )}
                <PublicNavbar categoriesMenuOpen={categoriesMenuOpen} setCatMenuOpen={setCatMenuOpen} />

                {children}

                <Footer />
            </div>
        </>
    )
}
