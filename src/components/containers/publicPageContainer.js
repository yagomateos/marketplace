'use client'

import React, { useState } from 'react'
import PublicNavbar from '../public/navbar/page'
import Footer from '../public/footer/page'
import './pageContainer.css'
import Popup from '../public/popup/popup'

export default function PublicPageContainer({ children }) {
    const [categoriesMenuOpen, setCatMenuOpen] = useState(false)
    const [searchMenuOpen, setSearchMenuOpen] = useState(false)
    const [openedPopup, setOpenedPopup] = useState(false)

    const checkPopups = () => {
        // check categories popup
        categoriesMenuOpen && setCatMenuOpen(false)
        // check search result
        searchMenuOpen && setSearchMenuOpen(false)
    }


    return (
        <>
            <div className="relative">
                {categoriesMenuOpen || searchMenuOpen ? (
                    <div className='dropdownOverlay' onClick={() => checkPopups()}></div>
                ) : ""}
                <PublicNavbar checkPopups={checkPopups} categoriesMenuOpen={categoriesMenuOpen} setCatMenuOpen={setCatMenuOpen} setOpenedPopup={setOpenedPopup} searchMenuOpen={searchMenuOpen} setSearchMenuOpen={setSearchMenuOpen} />

                {children}

                <Footer />
                <Popup openedPopup={openedPopup} setOpenedPopup={setOpenedPopup} />

            </div>
        </>
    )
}
