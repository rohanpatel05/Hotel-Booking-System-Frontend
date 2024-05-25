/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config/url';
import { loadStripe } from '@stripe/stripe-js'; 
import useAuth from '../../hooks/useAuth.js';
import { usePaymentIntent } from "../../hooks/usePaymentIntent.js";
import { useSelector } from "react-redux";
import { NotFound } from "../index.js"
import { CheckoutForm, OverlayedSpinner as Spinner, StyledErrorAlert } from "../../components/index.js";
import { Elements } from "@stripe/react-stripe-js";

function Payment() {
    const { authState } = useAuth();

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    const { data: checkAvailabilityData, checkInDate, checkOutDate } = useSelector(state => state.availability);

    const {
        mutate: getPaymentIntent,
        data: paymentIntentData,
        isLoading: paymentIntentIsLoading,
        isError: paymentIntentIsError,
        error: paymentIntentError
    } = usePaymentIntent();

    useEffect(() => {
        const fetchPaymentIntent = async () => {
            let amount = 0;

            checkAvailabilityData.forEach(type => {
                type.rooms.forEach(room => {
                    amount += room.price;
                });
            });

            const paymentIntentBody = { amount };

            getPaymentIntent({
                accessToken: authState.accessToken,
                paymentIntentBody
            });

            if (paymentIntentData !== undefined) {
                setClientSecret(paymentIntentData.paymentIntent);
            }
        };

        if (checkAvailabilityData !== null) {
            fetchPaymentIntent();
        }
    }, [checkAvailabilityData, authState.accessToken, getPaymentIntent]);

    useEffect(() => {
        axios.get
        fetch(BASE_URL + "/payment/config").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
        });
    },[])

    if (checkAvailabilityData === null) {
        return <NotFound/>
    }

    if (paymentIntentIsLoading)  return <Spinner />;

    if (paymentIntentIsError) {
        return (
            <StyledErrorAlert variant="danger">
                Error creating payment form: {paymentIntentError.message}
            </StyledErrorAlert>
        );
    }

    return (
        <>
            <h1>React Stripe and the Payment Element</h1>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    )
}

export default Payment