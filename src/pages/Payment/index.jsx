import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'; 
import { usePaymentIntent } from "../../hooks/usePaymentIntent.js";
import { useSelector } from "react-redux";
import { NotFound } from "../index.js"
import { CheckoutForm, OverlayedSpinner as Spinner, StyledErrorAlert } from "../../components/index.js";
import { Elements } from "@stripe/react-stripe-js";
import { Container, InfoSectionWrapper, Title, OrderInfo } from "./PaymentElements.js"
import { axiosInstancePublic } from '../../config/axiosInstances.js';

function Payment() {

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    const { data: checkAvailabilityData, checkInDate, checkOutDate, totalAmount } = useSelector(state => state.availability);

    const {
        mutate: getPaymentIntent,
        data: paymentIntentData,
        isLoading: paymentIntentIsLoading,
        isError: paymentIntentIsError,
        error: paymentIntentError
    } = usePaymentIntent();

    useEffect(() => {
        const fetchPaymentIntent = async () => {
            if (totalAmount) {

                const paymentIntentBody = { amount: totalAmount };

                getPaymentIntent(paymentIntentBody);
            }
        };

        fetchPaymentIntent();
    }, [totalAmount, getPaymentIntent]);

    useEffect(() => {
        if (paymentIntentData) {
            setClientSecret(paymentIntentData.paymentIntent);
        }        
    }, [paymentIntentData]);

    useEffect(() => {
        const fetchStripeConfig = async () => {
            try {
                const response = await axiosInstancePublic.get(`/payment/config`);
                const publishableKey = response.data.publishableKey;
                if (!publishableKey) {
                    throw new Error("Missing publishable key");
                }
                setStripePromise(loadStripe(publishableKey));
            } catch (error) {
                console.error("Error fetching Stripe config:", error);
            }
        };

        fetchStripeConfig();
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
            <Container>
                <Title>Order Info</Title>
                <InfoSectionWrapper>
                    <OrderInfo>Check-in Date: {checkInDate}</OrderInfo>
                    <br/>
                    <OrderInfo>Check-out Date: {checkOutDate}</OrderInfo>
                </InfoSectionWrapper>

                <InfoSectionWrapper>
                    {checkAvailabilityData.map((roomType, index) => (
                        <div key={index}>{roomType.rooms.length} {roomType.type} {roomType.rooms.length === 1 ? "room" : "rooms" }.</div>
                    ))}
                </InfoSectionWrapper>

                <OrderInfo>Total amount: ${totalAmount}</OrderInfo>
            </Container>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    )
}

export default Payment