'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getCartFunc } from '../../lib/actions/cart/getCart'
import PublicPageContainer from '../../components/containers/publicPageContainer'

export default function CartPage() {
    const router = useRouter();
    const { data: session } = useSession()

    const [cartDta, setCartDta] = useState(null)
    const [cartQty, setCartQty] = useState(0)
    const [totalAmt, setTotalAmt] = useState(0)

    useEffect(() => {

        const getCartInfo = async () => {
            try {
                const cartInfo = await getCartFunc(session.user.id)
                console.clear()
                console.log(cartInfo)
                if (cartInfo) {
                    setCartDta(cartInfo)
                    setCartQty(cartInfo.length)
                }
            } catch (error) {
                console.log(error)
            }
        }
        // get cart information
        if (session?.user?.id) {
            getCartInfo()
        }
    }, [session])

    useEffect(() => {
        let totalPrice = 0;
        cartDta&&cartDta.forEach(crtItem => {
            console.log(crtItem.regular_price)
            totalPrice += parseFloat(crtItem.regular_price)
        });
        setTotalAmt(totalPrice)
    }, [cartQty])
    


    return (
        <PublicPageContainer>

            <div className='max-w-7xl mr-auto ml-auto py-8'>
                {/* number of items */}
                <h3 className='text-2xl'>{cartQty} artículos en mi carrito</h3>

                {/* banner */}
                <div className='bg-green-400 p-5 rounded-lg w-full text-sm mt-4'>
                    Compra con confianza con el programa de protección de compras de Vendalia para compradores, con el que recibirás un reembolso completo si el artículo no llega, llega dañado o no coincide con la descripción. Consulta las condiciones
                </div>

                {/* product and payment infomation */}
                <div className='lg:flex mt-7 w-full'>
                    <div className='lg:w-[70%]'>
                        <div className='rounded-lg border border-[#ccc] p-5'>
asd
                        </div>
                    </div>
                    <div className='lg:w-[30%] p-6'>
                        <h3>Forma de pago</h3>
                        <ul>
                            <li>
                                <input type='radio' value='stripe' /> <img src="" />
                            </li>
                        </ul>
                        <div className='mt-6'>
                            <div className='w-full flex justify-between'>
                                <h4>Total de artículos</h4>
                                <p>{totalAmt && totalAmt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </PublicPageContainer>

    )
}
