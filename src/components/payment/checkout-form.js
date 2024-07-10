'use client'

import { useState, useEffect, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ clientSecret , setFormEl=null }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const formEl = useRef(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        if (!stripe || !elements) {
            return;
        }

        const submitError = await elements.submit();

        if (submitError) {
            setError(submitError.message)
            setProcessing(false)
        }

        const error = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `/registrado-en-la-tienda`
            }
        })

        if(error){
            setError(error.message)
        }else{

        }

    };

    useEffect(() => {
        setFormEl&&setFormEl(formEl)
    }, [formEl])
    

    console.log(formEl.current)

    return (
        <form onSubmit={handleSubmit} >
            <PaymentElement />
            <button ref={formEl} type="submit" disabled={processing || succeeded}>
                {processing ? 'Processing...' : 'Pay'}
            </button>
            {error && <div>{error}</div>}
            {succeeded && <div>Payment succeeded!</div>}
        </form>
    );
};

export const StripeCheckout = ({ amount , setFormEl = null }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the client secret from your backend API
        fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        })
            .then(async (res) => {
                if (!res.ok) {
                    // Handle non-200 responses
                    const errorMessage = await res.text();
                    throw new Error(errorMessage);
                }
                return res.json();
            })
            .then((data) => {
                console.log('Fetched client secret:', data.clientSecret); // Log client secret
                setClientSecret(data.clientSecret);
            })
            .catch((error) => {
                console.error('Error fetching client secret:', error); // Log the error for debugging
                setError(`Error fetching client secret: ${error.message}`);
            });
    }, [amount]);

    return (
        <>
            {error && <div>{error}</div>}
            {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm clientSecret={clientSecret} setFormEl={setFormEl} />
                </Elements>
            )}
        </>
    );
};

export default StripeCheckout;
