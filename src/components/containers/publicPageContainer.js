'use client'

import React, { useState } from 'react'
import PublicNavbar from '../public/navbar/page'
import Footer from '../public/footer/page'
import './pageContainer.css'
import Popup from '../public/popup/popup'

export default function PublicPageContainer({ children }) {
    const [categoriesMenuOpen, setCatMenuOpen] = useState(false)
    const [openedPopup, setOpenedPopup] = useState(false)

    console.clear()
    console.log(openedPopup)

    return (
        <>
            <div className="relative">
                {categoriesMenuOpen && (
                    <div className='dropdownOverlay' onClick={() => { setCatMenuOpen(false) }}></div>
                )}
                <PublicNavbar categoriesMenuOpen={categoriesMenuOpen} setCatMenuOpen={setCatMenuOpen} setOpenedPopup={setOpenedPopup}/>

                {children}

                <Footer />
                <Popup openedPopup={openedPopup} setOpenedPopup={setOpenedPopup} />

            </div>
        </>
    )
}
