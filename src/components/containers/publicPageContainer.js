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
    const [cartUpdated, setCartUpdated] = useState(false)

    const checkPopups = (e = null) => {
        // check categories popup
        if (!e.target.classList.contains('kd-nav-popup-wrapper') && !e.target.closest('.' + 'kd-nav-popup-wrapper')) {
            categoriesMenuOpen && setCatMenuOpen(false)
            // check search result
            searchMenuOpen && setSearchMenuOpen(false)
        }
    }

    const childrenWithProps = React.Children.map(children, child => {
        // Check if the child is a valid React element before cloning
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setCartUpdated });
        }
        return child;
    });

    return (
        <>
            <div className="relative">
                {categoriesMenuOpen || searchMenuOpen ? (
                    <div className='dropdownOverlay' onClick={(e) => checkPopups(e)}></div>
                ) : ""}
                <PublicNavbar 
                    cartUpdated={cartUpdated} 
                    checkPopups={checkPopups} 
                    categoriesMenuOpen={categoriesMenuOpen} 
                    setCatMenuOpen={setCatMenuOpen} 
                    setOpenedPopup={setOpenedPopup} 
                    searchMenuOpen={searchMenuOpen} 
                    setSearchMenuOpen={setSearchMenuOpen} 
                />

                {childrenWithProps}

                <Footer />
                <Popup 
                    openedPopup={openedPopup} 
                    setOpenedPopup={setOpenedPopup} 
                />
            </div>
        </>
    )
}
