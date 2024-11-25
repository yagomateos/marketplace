'use client';

import PublicPageContainer from "../../components/containers/publicPageContainer";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useSession } from 'next-auth/react';
import { getCartFunc } from "../../lib/actions/cart/getCart";
import FirstStep from './components/firstStep'
import { useRouter } from 'next/navigation';
import StripeCheckout from '../../components/payment/checkout-form'
import { createOrderFunc } from '../../lib/actions/orders/createOrder'

export default function Checkout() {
    const router = useRouter();
    const { state, dispatch } = useAppContext();
    const { data: session } = useSession();
    const [cartDta, setCartDta] = useState(null);
    const [singleCheckout, setSingleCheckout] = useState(false);
    const [checkoutAddress, setCheckoutAddress] = useState(false)
    const [checkoutStep, setCheckoutStep] = useState(1);
    const [userId, setUserId] = useState(null)
    const [formEl, setFormEl] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartItemIds, setCartItemIds] = useState([])
    const [orderSuccess, setOrderSuccess] = useState(null)
    const [orderError, setOrderError] = useState(null)
    const [paymentSuceeded, setPaymentSuceeded] = useState(false)

    useEffect(() => {
        const getCartData = async () => {
            try {
                const cartInfo = await getCartFunc(session.user.id);
                console.log(cartInfo);
                if (cartInfo) {
                    setCartDta(cartInfo);
                }
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };

        // Run only when session.user.id is available
        if (session?.user?.id) {
            setUserId(session?.user?.id)
            if (state.checkoutType === 'single' && state.checkoutItems) {
                setCartDta(state.checkoutItems);
                setSingleCheckout(true);
            } else if (!cartDta) {
                getCartData();
            }
        } else {
            router.push('/')
        }
    }, [session?.user?.id, state.checkoutType, state.checkoutItems]);

    useEffect(() => {
        console.clear();
        console.log(cartDta)
        let totalAmt = 0;
        let cartItems = [];

        cartDta && cartDta.forEach(itm => {
            itm.sale_price && itm.sale_price != '' ? totalAmt += parseFloat(itm.sale_price) : totalAmt += parseFloat(itm.regular_price)
            // console.log(itm)
            cartItems.push(itm.Id)
        });


        setTotalPrice(totalAmt)
        setCartItemIds(cartItems)

        console.clear();
        console.log(totalPrice)
        console.log(cartItemIds)

    }, [cartDta])

    useEffect(() => {

        console.clear()
        console.log('creating order')

        const createOrder = async () => {

            console.clear()
            console.log(userId)
            try {
                console.log(userId)
                const orderCreated = await createOrderFunc(userId, cartItemIds)
                console.log(orderCreated)
                setOrderSuccess('Su pedido ha sido realizado');
                router.push('/verificar/pedido_confirmado')

            } catch (error) {
                console.log(error)
                setOrderError('Algo salió mal');
            }

        }

        paymentSuceeded&&createOrder();

        


    }, [paymentSuceeded])





    const returnCheckoutStep = () => {
        switch (checkoutStep) {
            case 1:
                return <FirstStep userId={userId} setCheckoutAddress={setCheckoutAddress} setCheckoutStep={setCheckoutStep} />
            case 2:
                return <div className="max-w-2xl mr-auto ml-auto my-5">
                    <div className="flex justify-between items-center">
                        <h2 className='text-3xl mb-8'>Completar pago</h2>
                        <a href="#" className="text-sm font-semibold underline" onClick={(e) => { e.preventDefault(); setCheckoutStep(1) }}>Cambiar dirección</a>
                    </div>


                    <div>
                        <StripeCheckout amount={parseInt(totalPrice)} setFormEl={setFormEl} setPaymentSuceeded={setPaymentSuceeded} />
                    </div>


                    <div className="w-full my-4 flex justify-end">
                        <a href="#" onClick={(e) => { e.preventDefault(); formEl.current.click() }} className="ml-auto inline-block py-4 px-7 bg-black text-white rounded-full">Pago completo</a>

                    </div>
                </div>;

            default:
                return <div>Invalid Step</div>;
        }
    };

    return (
        <PublicPageContainer>
            <div>
                {cartDta ? (
                    returnCheckoutStep()
                ) : (
                    <div className="text-center min-h-96 flex justify-center items-center">
                        Cargando...
                    </div>
                )}
            </div>
        </PublicPageContainer>
    );
}
