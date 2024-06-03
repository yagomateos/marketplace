'use client'
import { signOut } from 'next-auth/react';
import Featuredcategories from './components/featuredCategories'
import { useState } from 'react';

export default function PublicNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const signOutUser = async (e) => {
        e.preventDefault();
        signOut({ redirect: true, callbackUrl: '/login' });
    }

    return (
        <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 border-b border-gray-300">
            {/* Top Section for Desktop */}
            <div className='hidden lg:flex justify-between items-center w-full px-0 py-4'>
                <div className='right ml-auto'>
                    <ul className="flex space-x-4 text-xs">
                        <li><a>Help</a></li>
                        <li><a>Wishlist</a></li>
                    </ul>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full py-4">
                <div className="flex justify-between items-center w-full lg:w-auto">
                    <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <h2 className="text-xl font-semibold ml-4 lg:ml-0">Marketplace</h2>
                    <button className="lg:hidden ml-auto" onClick={signOutUser}>
                        Logout
                    </button>
                </div>
                <div className="flex justify-center w-full mt-4 lg:mt-0 px-0 lg:px-8">
                    <input type="text" placeholder="Search..." className="border rounded px-3 py-2 w-full" />
                </div>
                <div className="hidden lg:flex">
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="/" onClick={signOutUser}>Logout</a></li>
                            <li>Cart</li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Menu for Mobile */}
            {menuOpen && (
                <div className="lg:hidden">
                    <ul className="flex flex-col space-y-4 mt-4">
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="/" onClick={signOutUser}>Logout</a></li>
                        <li>Cart</li>
                    </ul>
                    <div className="mt-4">
                        <Featuredcategories />
                    </div>
                </div>
            )}

            {/* Bottom Section for Desktop */}
            <div className='hidden lg:flex justify-center items-center w-full px-0 py-4'>
                <div className='center flex justify-center w-full'>
                    <Featuredcategories />
                </div>
            </div>
        </div>
    );
}
