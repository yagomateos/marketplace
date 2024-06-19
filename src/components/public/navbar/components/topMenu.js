'use client'

import React, { useState } from 'react'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function TopMenu({ session, setOpenedPopup }) {

    const router = useRouter();

    const signOutUser = async (e) => {
        e.preventDefault();
        signOut({ redirect: false });
    }

    const [userPopupOpen , setUserPopupOpen] = useState(false)


    return (
        <ul className="flex space-x-1 lg:space-x-4 text-sm font-semibold items-center">
            {!session ? (
                <li><a className='py-2 px-3 rounded-full hover:bg-gray-200 block' href='/' onClick={(e) => { e.preventDefault(); setOpenedPopup('login') }} >Entrar</a></li>
            ) : ''}

            <li>
                <span className='tooltip-nav-item relative'>
                    <a href='#' onClick={(e) => { e.preventDefault(); router.push('/favoritos'); }} className="tooltip-trigger flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/favorite.svg" /></a>
                    <span className='kd-tooltip absolute left-1/2 bg-green-500 text-white rounded-lg p-3 -bottom-12 w-max'>
                        Favoritos
                    </span>
                </span>
            </li>
            <li>
                <span className='tooltip-nav-item relative'>
                    <a className="tooltip-trigger flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/gift.svg" /></a>
                    <span className='kd-tooltip absolute left-1/2 bg-green-500 text-white rounded-lg p-3 -bottom-12 w-max'>
                        Buscador de regalos
                    </span>
                </span>
            </li>
            {
                session && (
                    <>
                        <li>
                            <a onClick={(e)=>{e.preventDefault(); setUserPopupOpen(!userPopupOpen)}} className='flex w-7 h-7 justify-center items-center' href=""><img className='w-12 rounded-full border-2 border-green-500' src="https://i.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg" /></a>
                            {userPopupOpen &&
                                <span className='absolute right-0 top-[90%] shadow-md shadow-[#00000035] block rounded-xl bg z-50 min-w-64 kd-user-popup'>
                                    <div className='p-4 bg-green-500 flex gap-3 rounded-t-lg'>
                                        <img className='w-5' src="https://i.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg" /> <h2 className='ml-1'>Kamindu</h2>
                                    </div>
                                    <div className='p-4 bg-white rounded-b-lg'>
                                        <ul>
                                            <li><a href="/" onClick={(event) => { signOutUser(event) }}><img className='w-7 inline-block mr-2' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/logout.svg" /> &nbsp;cerrar sesión</a></li>
                                        </ul>
                                    </div>
                                </span>
                            }
                        </li>

                    </>
                )
            }

            <li>
                <a className="tooltip-trigger flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200"><img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/cart.svg" /></a>

            </li>
        </ul >
    )
}
