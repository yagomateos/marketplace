'use client'

import { useSession } from 'next-auth/react';
import Featuredcategories from './components/featuredCategories'
import { useEffect, useState } from 'react';
import { getfeaturedCategories } from '../../../lib/actions/products/categories'
import SearchForm from './components/searchForm'
import TopMenu from './components/topMenu'
import './navbar.css'
import { useRouter } from 'next/navigation';


export default function PublicNavbar({cartUpdated, checkPopups, categoriesMenuOpen, setCatMenuOpen, setOpenedPopup, searchMenuOpen, setSearchMenuOpen , userPopupOpen , setUserPopupOpen}) {
   


    const router = useRouter();
    const { data: session } = useSession()
    
    // console.clear()
    // console.log(session.user)

    // const [menuOpen, setMenuOpen] = useState(false);

    const [featuredCategories, setFeaturedcategories] = useState(null);


    // getting featured categories
    useEffect(() => {
        const fetchFeaturedCategories = async () => {
            try {
                const categories = await getfeaturedCategories(8);
                setFeaturedcategories(categories);
            } catch (error) {
                console.log(error);
            }
        };

        fetchFeaturedCategories();
    }, []);




    return (
        <div className="border-b border-gray-300 relative lg:z-20 bg-white" onClick={(e) => checkPopups(e)} >

            <div className='container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 '>
                {/* Center Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full py-4 relative">
                    <div className="flex justify-between items-center w-full lg:w-auto">
                        <h2 className="text-xl font-semibold ml-0 lg:ml-0"><a href='#' onClick={(e)=>{e.preventDefault(); router.push('/')}}><img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/logo.svg" className='w-32 lg:w-48 max-w-full' /></a></h2>

                        <div className='lg:hidden'>
                            <TopMenu cartUpdated={cartUpdated} session={session} setOpenedPopup={setOpenedPopup} userPopupOpen={userPopupOpen} setUserPopupOpen={setUserPopupOpen} />
                        </div>

                    </div>
                    <div className='hidden lg:block w-full lg:w-auto px-4'>
                        {/* categories hamburger */}
                        <button onClick={() => setCatMenuOpen(!categoriesMenuOpen)} className='transition-all flex justify-between items-center text-sm font-medium py-2  px-3 rounded-full hover:bg-gray-200 min-w-max box-border'><img className='w-5' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/hamburger.svg" />&nbsp; <span>Categorías</span></button>

                        {/* categories menu  */}

                        {categoriesMenuOpen && (
                            <Featuredcategories featuredCategories={featuredCategories} />
                        )
                        }

                    </div>
                    <div className="flex justify-center w-full mt-4 lg:mt-0 px-0 lg:px-8 relative">
                        <button className="lg:hidden mr-4" onClick={() => setCatMenuOpen(!categoriesMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                        <SearchForm searchMenuOpen={searchMenuOpen} setSearchMenuOpen={setSearchMenuOpen} />

                    </div>
                    <div className="hidden lg:flex lg:w-auto lg:pl-4">
                        <nav>
                            <TopMenu cartUpdated={cartUpdated} session={session} setOpenedPopup={setOpenedPopup} userPopupOpen={userPopupOpen} setUserPopupOpen={setUserPopupOpen}/>
                        </nav>
                    </div>
                </div>

                {/* Menu for Mobile */}
                {categoriesMenuOpen && (
                    <div className="lg:hidden">
                        <Featuredcategories featuredCategories={featuredCategories} />
                    </div>
                )
                }

                {/* Bottom Section for Desktop */}
                <div className='hidden lg:flex justify-center items-center w-full px-0 py-4'>
                    <div className='center flex justify-center w-full'>
                        <ul className="text-sm items-center font-semibold flex items-center justify-center gap-8">
                            <li><a className='inline-flex w-max py-2 px-3 hover:bg-gray-200 rounded-full' href=""><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/gift.svg" /> &nbsp;Buscador de regalos</a></li>
                            <li><a className='inline-flex w-max py-2 px-3 hover:bg-gray-200 rounded-full' href="">Ofertas por el Día del Padre</a></li>
                            <li><a className='inline-flex w-max py-2 px-3 hover:bg-gray-200 rounded-full' href="">Favoritos para el hogar</a></li>
                            <li><a className='inline-flex w-max py-2 px-3 hover:bg-gray-200 rounded-full' href="">Moda</a></li>
                            <li><a className='inline-flex w-max py-2 px-3 hover:bg-gray-200 rounded-full' href="">Listas de regalos</a></li>
                            <li><a className='inline-flex w-max py-2 px-3 hover:bg-gray-200 rounded-full' href="">Tarjetas regalo</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
