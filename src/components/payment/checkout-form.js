'use client'

import { useState, useEffect, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ clientSecret, setFormEl = null , setPaymentSuceeded }) => {
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

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `https://www.vendalia.es/`
            },
            redirect: 'if_required',
        })

        if (error) {
            setError(error.message);
            setProcessing(false);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setSucceeded(true);
            setProcessing(false);
        } else {
            // Retrieve the payment intent to check the status
            const { paymentIntent: retrievedPaymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
            if (retrievedPaymentIntent && retrievedPaymentIntent.status === 'succeeded') {
                setSucceeded(true);
            } else {
                setError('Pago no exitoso');
            }
            setProcessing(false);
        }

    };

    useEffect(() => {
        setFormEl && setFormEl(formEl)
    }, [formEl])

    useEffect(() => {
        console.log('comes here')
        console.log(succeeded)
        succeeded&&setPaymentSuceeded(true)
    }, [succeeded])
    

    console.log(formEl.current)

    return (
        <form onSubmit={handleSubmit} >
            <PaymentElement />
            <button className='hidden' ref={formEl} type="submit" disabled={processing || succeeded}>
                {processing ? 'Processing...' : 'Pay'}
            </button>
            {error && <div>{error}</div>}
            {succeeded && <div>Pago exitoso</div>}
        </form>
    );
};

export const StripeCheckout = ({ amount, setFormEl = null , setPaymentSuceeded }) => {
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
                    <CheckoutForm clientSecret={clientSecret} setFormEl={setFormEl} setPaymentSuceeded={setPaymentSuceeded} />
                </Elements>
            )}
        </>
    );
};

export default StripeCheckout;
