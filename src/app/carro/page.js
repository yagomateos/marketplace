'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getCartFunc } from '../../lib/actions/cart/getCart'
import { useAppContext } from '../context/AppContext';
import PublicPageContainer from '../../components/containers/publicPageContainer'
import { convertToCurrency } from '../../lib/utils/convertCurrency'
import { updateFromCartFunc } from '../../lib/actions/cart/updateCart'
import { deleteFromCartFunc } from '../../lib/actions/cart/deleteFromCart'

export default function CartPage() {
    const router = useRouter();
    const { data: session } = useSession()
    const { state, dispatch } = useAppContext();

    const [cartDta, setCartDta] = useState(null)
    const [cartQty, setCartQty] = useState(0)
    const [totalAmt, setTotalAmt] = useState(0)
    const [notification, setNotification] = useState(null)
    const [cartQtys, setCartQtys] = useState([]);
    const [userId , setUserId] = useState(null);

    const [isCartInfoFetched, setIsCartInfoFetched] = useState(false);

    useEffect(() => {
        const getCartInfo = async () => {
            try {
                const cartInfo = await getCartFunc(session.user.id);
                console.clear();
                console.log(cartInfo);
                if (cartInfo) {
                    setCartDta(cartInfo);
                    let qty = 0;
                    let cartQtyInst = [];
                    cartInfo.forEach(cartInf => {
                        qty += cartInf.cartQuantity;
                        cartQtyInst.push({ id: cartInf.Id, qty: cartInf.cartQuantity });
                    });
                    setCartQty(qty);
                    setCartQtys(cartQtyInst);
                }
            } catch (error) {
                console.log(error);
            }
        };

        // Ensure it runs only when session.user.id is available and not already fetched
        if (session?.user?.id && !isCartInfoFetched) {
            getCartInfo();
            setIsCartInfoFetched(true); // Prevent re-runs
            setUserId(session?.user?.id)
        }
    }, [session, isCartInfoFetched]);

    useEffect(() => {
        let totalPrice = 0;
        cartDta && cartDta.forEach((crtItem,key) => {
            console.log(crtItem.regular_price)
            console.log(crtItem)

            if(crtItem.sale_price&&parseFloat(crtItem.sale_price)>0){
                totalPrice += parseFloat(crtItem.sale_price) * parseFloat(cartQtys[key].qty)
            }else{
                totalPrice += parseFloat(crtItem.regular_price) * parseFloat(cartQtys[key].qty)
            }
            
        });
        setTotalAmt(totalPrice)
    }, [cartQty , cartQtys])

    const deleteFromCart = async (proId) => {
        try {
            const itemDeleted = await deleteFromCartFunc(userId, proId);
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

        // dispatch({ type: 'SET_CART_UPDATED', payload: { updated: true, time: new Date().toISOString() } });

    };

    const chageCartQty = async (e, prodId) => {
        e.preventDefault()
        console.clear();
        let newVal = e.target.querySelector('input').value


        try {
            const cartUpdated = await updateFromCartFunc(prodId, newVal)
            if (cartUpdated) {
                e.target.querySelector('input').placeholder = `${newVal}`
                e.target.querySelector('input').value = ""
                console.log('updated')
                dispatch({ type: 'SET_CART_UPDATED', payload: { updated: true, time: new Date().toISOString() } });
            }
        } catch (error) {
            console.log(error)
            e.target.querySelector('input').value = ""
        }

    }

    useEffect(() => {
        console.log('hutta')
        dispatch({ type: 'SET_CART_UPDATED', payload: { updated: true, time: new Date().toISOString() } });
    }, [cartDta])


    const qtyChange = (e, key) => {
        e.preventDefault();
        const val = e.target.value;
        console.clear();
        console.log(val)

        let cartQtyInst = [...cartQtys];
        cartQtyInst[key].qty = val

        console.log(cartQtyInst)
        setCartQtys(cartQtyInst)
    }

    const goToCheckout = (e) => {
        e.preventDefault();
        // console.clear();
        // console.log(cartDta)
        // const checkoutItems = [];
        // cartDta.forEach(Itm => {

        //     let amount = 0;

        //     if (Itm.sale_price && parseFloat(Itm.sale_price) < parseFloat(Itm.regular_price)) {
        //         amount = parseFloat(Itm.cartQuantity) * parseFloat(Itm.sale_price)
        //     } else {
        //         amount = parseFloat(Itm.cartQuantity) * parseFloat(Itm.regular_price)
        //     }

        //     checkoutItems.push({ id: Itm.Id, qty: Itm.cartQuantity, amt: amount.toLocaleString(2) })
        // })

        // console.log(checkoutItems)

        // dispatch({ type: 'SET_CHECKOUT_ITEMS', payload: { checkoutItems: checkoutItems } });
        router.push('/verificar')
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
                                            {/* <img src={prod.logo ? prod.logo : 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/placeholder-image.jpg'} className='inline-block w-[35px] lg:w-[45px] rounded-md mr-3' /> */}
                                            {prod.store_name && <p className='inline-block font-semibold text-sm lg:text-md'>{prod.store_name}</p>}
                                        </a>
                                        <a className='hidden lg:block' href='/'>Contactar con la tienda</a>
                                    </div>
                                    <div className='product-card-inner flex justify-between gap-6 mt-6'>
                                        <div className='w-[24%]'>
                                            <img src={prod.main_image_url ? prod.main_image_url : 'https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/placeholder-image.jpg'} className='w-full' />
                                        </div>
                                        <div className='lg:w-[48%] hidden lg:block'>
                                            <p className='pl-4 uppercase text-red-800 font-xl mb-2'>{prod.quantity > 1 ? `Quedan ${prod.quantity} productos y ${cartQtys[key].qty} en el carrito` : `SOLO HAY ${prod.quantity} Y ESTÁ EN ${prod.cartQuantity} CARRITO`}</p>
                                            <h3 className='pl-4'><a href={`listado?pid=${prod.item_id && prod.item_id}`}>{prod.name && prod.name}</a></h3>
                                            <div className='flex gap-5 mt-5'>
                                                <form onSubmit={e => chageCartQty(e, prod.item_id)}>
                                                    <input type='number' className='border p-2 border-[#000] ml-4' min="0" value={cartQtys[key].qty} onChange={(e) => qtyChange(e, key)} />
                                                    <button type='submit' className='text-sm ml-4 font-semibold '>Actualización de la compra</button>
                                                </form>
                                            </div>
                                            <div className='flex gap-5 mt-5'>
                                                <a className='py-2 px-4 hover:bg-[#f2f2f2] rounded-full cursor-pointer text-sm font-semibold'>Guardar para más tarde</a>
                                                <a className='py-2 px-4 hover:bg-[#f2f2f2] rounded-full cursor-pointer text-sm font-semibold' data-prodId={`${prod.Id}`} onClick={(e) => { e.preventDefault(); deleteFromCart(prod.Id) }}>Eliminar</a>
                                            </div>
                                        </div>
                                        <div className='w-[73%] lg:w-[24%] lg:text-right'>
                                            <h3 className="text-green-800 text-xl lg:text-2xl">{prod.sale_price && prod.sale_price > 0 ? convertToCurrency(parseFloat(prod.sale_price) * parseFloat(cartQtys[key].qty)) : convertToCurrency(parseFloat(prod.regular_price) * parseFloat(cartQtys[key].qty))}</h3>
                                            <p className="line-through">{prod.regular_price && convertToCurrency(parseFloat(prod.regular_price) * parseFloat(cartQtys[key].qty))}</p>
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
                                        <a href="" onClick={(e) => { goToCheckout(e) }} className='py-5 px-8 bg-black rounded-full text-white w-full block text-center'>Tramitar pedido</a>
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
