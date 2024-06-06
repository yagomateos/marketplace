'use client'

import { signOut } from 'next-auth/react';
import Featuredcategories from './components/featuredCategories'
import { useEffect, useState } from 'react';
import { getfeaturedCategories } from '../../../lib/actions/products/categories'
import './navbar.css'

export default function PublicNavbar({ categoriesMenuOpen, setCatMenuOpen }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const [featuredCategories, setFeaturedcategories] = useState(null);

    const signOutUser = async (e) => {
        e.preventDefault();
        signOut({ redirect: true, callbackUrl: '/login' });
    }

    // getting featured categories
    useEffect(() => {
        const fetchFeaturedCategories = async () => {
            try {
                const categories = await getfeaturedCategories(8);
                setFeaturedcategories(categories);
                console.log('here')
            } catch (error) {
                console.log(error);
            }
        };

        fetchFeaturedCategories();
    }, []);


    return (
        <div className="border-b border-gray-300">

            <div className='container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 '>
                {/* Center Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full py-4 relative">
                    <div className="flex justify-between items-center w-full lg:w-auto">
                        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold ml-4 lg:ml-0"><img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/logo.svg" className='w-48' /></h2>
                        <button className="lg:hidden ml-auto" onClick={signOutUser}>
                            Logout
                        </button>
                    </div>
                    <div className='hidden lg:block w-full lg:w-auto px-8'>
                        {/* categories hamburger */}
                        <button onClick={() => setCatMenuOpen(!categoriesMenuOpen)} className='flex justify-between items-center'><img className='w-5' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/hamburger.svg" />&nbsp; <span>categorías</span></button>

                        {/* categories menu  */}
                        {categoriesMenuOpen && (
                            <Featuredcategories featuredCategories={featuredCategories} />
                        )
                        }
                    </div>
                    <div className="flex justify-center w-full mt-4 lg:mt-0 px-0 lg:px-12">
                        <form className="w-full relative kd-navbar-search-form rounded-full overflow-hidden">
                            <input type="text" placeholder="Search..." className="border-2 border-zinc-950 rounded px-3 py-2 w-full h-12 rounded-full" />
                            <button type="submit" class="search-submit-btn p-1  rounded-full bg-green-500 text-white absolute flex justify-center items-center">
                                <img className='w-4' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/search.svg" />
                            </button>
                        </form>

                    </div>
                    <div className="hidden lg:flex">
                        <nav>
                            <ul className="flex space-x-4 text-sm">
                                <li><a href="/" onClick={signOutUser}>Logout</a></li>
                                <li><a className="flex items-center justify-center h-full w-5"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/favorite.svg" /></a></li>
                                <li><a className="flex items-center justify-center h-full w-5"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/cart.svg" /></a></li>
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
                            {/* <Featuredcategories /> */}
                        </div>
                    </div>
                )}

                {/* Bottom Section for Desktop */}
                <div className='hidden lg:flex justify-center items-center w-full px-0 py-4'>
                    <div className='center flex justify-center w-full'>
                        <ul className="text-sm flex items-center justify-center gap-8">
                            <li><a href="">Gift Mode</a></li>
                            <li><a href="">Father&apos;s Day deals</a></li>
                            <li><a href="">Home favorites</a></li>
                            <li><a href="">Fashion Finds</a></li>
                            <li><a href="">Registry</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
