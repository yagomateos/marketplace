'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getCartFunc } from '../../lib/actions/cart/getCart'
import PublicPageContainer from '../../components/containers/publicPageContainer'
import { convertToCurrency } from '../../lib/utils/convertCurrency'
import { updateFromCartFunc } from '../../lib/actions/cart/updateCart'

export default function CartPage() {
    const router = useRouter();
    const { data: session } = useSession()

    const [cartDta, setCartDta] = useState(null)
    const [cartQty, setCartQty] = useState(0)
    const [totalAmt, setTotalAmt] = useState(0)
    const [notification, setNotification] = useState(null)

    useEffect(() => {

        const getCartInfo = async () => {
            try {
                const cartInfo = await getCartFunc(session.user.id)
                // console.clear()
                // console.log(cartInfo)
                if (cartInfo) {
                    setCartDta(cartInfo)
                    let qty = 0;
                    cartInfo.forEach(cartInf => {
                        qty += cartInf.cartQuantity
                    })
                    setCartQty(qty)
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
        cartDta && cartDta.forEach(crtItem => {
            console.log(crtItem.regular_price)
            console.log(crtItem)
            totalPrice += parseFloat(crtItem.regular_price)
        });
        setTotalAmt(totalPrice)
    }, [cartQty])

    const deleteFromCart = async (proId) => {
        try {
            const itemDeleted = await deleteFromCartFunc(proId);
            console.clear();
            console.log(itemDeleted);

            if (itemDeleted) {
                // Filter out the deleted item from cartDta
                console.log(cartDta)
                console.log(proId)
                const newCartEls = cartDta.filter(el => el.Id != proId);

                console.log(newCartEls);
                setCartDta(newCartEls);

                // Update the cart quantity
                const newCartQty = newCartEls.reduce((total, item) => total + item.cartQuantity, 0);
                setCartQty(newCartQty);

                // Update the total amount
                const newTotalAmt = newCartEls.reduce((total, item) => total + parseFloat(item.regular_price), 0);
                setTotalAmt(newTotalAmt);

                setNotification(`Producto eliminado exitosamente`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const chageCartQty = async (e, prodId) => {
        e.preventDefault()
        console.clear();
        let newVal = e.target.querySelector('input').value
        try {
            const cartUpdated = await updateFromCartFunc(prodId , newVal)
            if(cartUpdated){
                e.target.querySelector('input').placeholder=`${newVal}`
                e.target.querySelector('input').value=""
                console.log('updated')
            }
        } catch (error) {
            console.log(error)
            e.target.querySelector('input').value=""
        }
        
    }


    return (
        <PublicPageContainer>

            <div className='max-w-7xl mr-auto ml-auto py-8 px-4 lg:px-0'>
                {/* number of items */}
                <h3 className='text-2xl text-center lg:left-left'>{cartQty} artículos en mi carrito</h3>

                {cartQty > 0 && (
                    <>
                        {/* banner */}
                        <div className='bg-green-400 p-5 rounded-lg w-full text-sm mt-4'>
                            Compra con confianza con el programa de protección de compras de Vendalia para compradores, con el que recibirás un reembolso completo si el artículo no llega, llega dañado o no coincide con la descripción. Consulta las condiciones
                        </div>

                        {/* product and payment infomation */}
                        <div className='lg:flex mt-7 w-full'>
                            <div className='lg:w-[70%]'>

                                {/* notification wrapper */}
                                {notification && (
                                    <div className='text-lg text-green-800 py-8'>{notification}</div>
                                )}

                                {cartDta && cartDta.map((prod, key) => (
                                    <div key={key} className='rounded-lg border border-[#ccc] p-5 mb-6'>
                                        <div className='product-card-header flex w-full justify-between'>
                                            <a href={`/almacenar/${prod.store_name && prod.store_name}`}>
                                                <img src={prod.logo ? prod.logo : 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/placeholder-image.jpg'} className='inline-block w-[35px] lg:w-[45px] rounded-md mr-3' />
                                                {prod.store_name && <p className='inline-block font-semibold text-sm lg:text-md'>{prod.store_name}</p>}
                                            </a>
                                            <a className='hidden lg:block' href='/'>Contactar con la tienda</a>
                                        </div>
                                        <div className='product-card-inner flex justify-between gap-6 mt-6'>
                                            <div className='w-[24%]'>
                                                <img src={prod.main_image_url ? prod.main_image_url : 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/placeholder-image.jpg'} className='w-full' />
                                            </div>
                                            <div className='lg:w-[48%] hidden lg:block'>
                                                <p className='pl-4 uppercase text-red-800 font-xl mb-2'>{prod.quantity > 1 ? `Quedan ${prod.quantity} productos y ${prod.cartQuantity} en el carrito` : `SOLO HAY ${prod.quantity} Y ESTÁ EN ${prod.cartQuantity} CARRITO`}</p>
                                                <h3 className='pl-4'><a href={`listado?pid=${prod.item_id && prod.item_id}`}>{prod.name && prod.name}</a></h3>
                                                <div className='flex gap-5 mt-5'>
                                                    <form onSubmit={e => chageCartQty(e, prod.item_id)}>
                                                        <input type='number' className='border p-2 border-[#000] ml-4' placeholder={prod.cartQuantity} />
                                                        <button type='submit' className='text-sm ml-4'>Actualización de la compra</button>
                                                    </form>
                                                </div>
                                                <div className='flex gap-5 mt-5'>
                                                    <a className='py-2 px-4 hover:bg-[#f2f2f2] rounded-full cursor-pointer text-sm font-semibold'>Guardar para más tarde</a>
                                                    <a className='py-2 px-4 hover:bg-[#f2f2f2] rounded-full cursor-pointer text-sm font-semibold' data-prodId={`${prod.Id}`} onClick={(e) => { e.preventDefault(); deleteFromCart(prod.Id) }}>Eliminar</a>
                                                </div>
                                            </div>
                                            <div className='w-[73%] lg:w-[24%] lg:text-right'>
                                                <h3 className="text-green-800 text-xl lg:text-2xl">{prod.sale_price && prod.sale_price > 0 ? convertToCurrency(prod.sale_price) : convertToCurrency(prod.regular_price)}</h3>
                                                <p className="line-through">{prod.regular_price && convertToCurrency(prod.regular_price)}</p>
                                                <div className='lg:hidden mt-3'>
                                                    <h3 className=''><a href={`listado?pid=${prod.item_id && prod.item_id}`}>{prod.name && prod.name}</a></h3>
                                                    <p className='lowercase text-sm text-red-800 font-sm mb-2'>{prod.quantity > 1 ? `Quedan ${prod.quantity} productos y ${prod.cartQuantity} en el carrito` : `SOLO HAY ${prod.quantity} Y ESTÁ EN ${prod.cartQuantity} CARRITO`}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='lg:text-right '>
                                            <a href="" className='hidden lg:block text-md font-semibold'>Pagar solo lo de esta tienda &nbsp; <img className='w-[15px] inline' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/right-arrow.svg" /></a>
                                            <a className='py-2 px-4 hover:bg-[#f2f2f2] rounded-full cursor-pointer text-sm font-semibold lg:hidden'>Guardar para más tarde</a>
                                            <a className='py-2 px-4 hover:bg-[#f2f2f2] rounded-full cursor-pointer text-sm font-semibold lg:hidden' onClick={(e) => { e.preventDefault(); deleteFromCart(prod.id) }}>Eliminar</a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className='lg:w-[30%] p-6'>
                                <h3 className='font-semibold mb-3'>Forma de pago</h3>
                                <ul>
                                    <li>
                                        <input type='radio' value='stripe' className='inline' /> <img className='w-[70px] inline ml-4' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/stripe-logo.png" />
                                    </li>
                                </ul>
                                <div className='mt-6'>
                                    <div className='w-full flex justify-between py-3'>
                                        <h4 className='font-semibold'>Total de artículos</h4>
                                        <p>{totalAmt && convertToCurrency(totalAmt)}</p>
                                    </div>
                                    <hr />
                                    <div className='w-full flex justify-between pt-3'>
                                        <h4 className=''>Subtotal</h4>
                                        <p>{totalAmt && convertToCurrency(totalAmt)}</p>
                                    </div>
                                    <div className='w-full flex justify-between pb-3'>
                                        <h4 className=''>Envío</h4>
                                        <p>0</p>
                                    </div>
                                    <hr />
                                    <div className='w-full flex justify-between py-3'>
                                        <h4 className='font-semibold'>Total - {cartQty} artículos</h4>
                                        <p>{totalAmt && convertToCurrency(totalAmt)}</p>
                                    </div>
                                    <div className='mt-8 w-full'>
                                        <a href="" className='py-5 px-8 bg-black rounded-full text-white w-full block text-center'>Tramitar pedido</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>

        </PublicPageContainer>

    )
}
