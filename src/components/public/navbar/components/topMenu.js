'use client'

import React, { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getCartFunc } from '../../../../lib/actions/cart/getCart'
import { useAppContext } from '../../../../app/context/AppContext';

export default function TopMenu({ cartUpdated, session, setOpenedPopup, userPopupOpen, setUserPopupOpen }) {

    // console.clear()
    // console.log(setOpenedPopup)
    // console.log(cartUpdated)

    const router = useRouter();

    const signOutUser = async (e) => {
        e.preventDefault();
        signOut({ redirect: false });
    }

    // const [userPopupOpen, setUserPopupOpen] = useState(false)
    const { state, dispatch } = useAppContext();
    const [cartQty, setCartQty] = useState(0)

    // get cart quantity
    const checkCartQty = async () => {
        console.log('comes here')
        try {
            const cartInfo = await getCartFunc(session.user.id)
            if (cartInfo) {
                let qty = 0;
                cartInfo.forEach(cartInf => {
                    qty += cartInf.cartQuantity
                })
                setCartQty(qty)
            }
        } catch (error) {
            setCartQty(0)
            console.log(error)
        }
    }

    useEffect(() => {
        session &&console.log(session.user)
        session && setOpenedPopup(false)
        session && checkCartQty()
    }, [session])


    useEffect(() => {
        if (state.cartUpdated) {
            checkCartQty()
        }
    }, [state.lastUpdated, dispatch]);



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
                            <a onClick={(e) => { e.preventDefault(); setUserPopupOpen(!userPopupOpen) }} className='flex w-7 h-7 justify-center items-center' href=""><img className='w-7 h-7 object-cover rounded-full border-2 border-green-500' src={session?.user?.image ? session.user.image : 'https://i.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg'} /></a>
                            {userPopupOpen &&
                                <span className='absolute right-0 top-[90%] shadow-md shadow-[#00000035] block rounded-xl bg z-50 min-w-64 kd-user-popup'>
                                    <div className='p-4 bg-green-500 flex gap-3 rounded-t-lg'>
                                        <img className='w-5' src={session?.user?.image ? session.user.image : 'https://i.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg'} /> <h2 className='ml-1'>{session.user.name}</h2>
                                    </div>

                                    <div className='p-4 bg-white rounded-b-lg'>
                                        <ul className='leading-8'>
                                            <li className='mb-3'><a href="/" onClick={(event) => { event.preventDefault(); router.push('/vender') }}><img className='w-7 inline-block mr-2' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/shop.svg" /> &nbsp;Vender en Vendalia</a></li>
                                            <li className='mb-3'><a href="/configuracion_de_la_cuenta"><img className='w-7 inline-block mr-2' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/settings-icon.svg" /> Configuración de la cuenta</a></li>
                                            <li className='mb-3'><a href="/" onClick={(event) => { signOutUser(event) }}><img className='w-7 inline-block mr-2' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/logout.svg" /> &nbsp;cerrar sesión</a></li>
                                        </ul>
                                    </div>
                                </span>
                            }
                        </li>

                    </>
                )
            }

            <li>

                <a href='/carro' className="tooltip-trigger flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-200 relative">
                    {cartQty > 0 && <span className='bg-orange-700 text-white text-xs absolute top-[3px] -right-0 rounded-full w-4 h-4 flex justify-center items-center p-2 block'>{cartQty}</span>}
                    <img className="w-5" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/cart.svg" />
                </a>

            </li>
        </ul >
    )
}
