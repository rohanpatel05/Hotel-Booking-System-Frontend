import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'; 
import { usePaymentIntent } from "../../hooks/usePaymentIntent.js";
import { useSelector } from "react-redux";
import { NotFound } from "../index.js"
import { CheckoutForm, OverlayedSpinner as Spinner, StyledErrorAlert } from "../../components/index.js";
import { Elements } from "@stripe/react-stripe-js";
import { 
    InfoContainer, 
    InfoSectionWrapper, 
    Title, 
    OrderInfo, 
    PaymentInfoWrapper, 
    InfoTitle, 
    PageContainer, 
    ContentWrapper 
} from "./PaymentElements.js"
import { axiosInstancePublic } from '../../config/axiosInstances.js';
import { format } from 'date-fns';
import colors from '../../config/colors.js';
import { Container, Row, Col } from "react-bootstrap";

function Payment() {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    const { data: checkAvailabilityData, checkInDate, checkOutDate, totalAmount } = useSelector(state => state.availability);
    const roomsInfo = useSelector((state) => state.rooms.value);

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
        <PageContainer>
            <Title>Secure Checkout</Title>
            <ContentWrapper>
                <Container fluid >
                    <Row >
                        <Col md={6}>
                            <InfoContainer>
                                <InfoTitle>Order Info</InfoTitle>
                                <InfoSectionWrapper>
                                    <OrderInfo>Check-in Date: {format(new Date(checkInDate), 'MMMM do, yyyy')}</OrderInfo>
                                    <br/>
                                    <OrderInfo>Check-out Date: {format(new Date(checkOutDate), 'MMMM do, yyyy')}</OrderInfo>
                                </InfoSectionWrapper>

                                <InfoSectionWrapper>
                                    <OrderInfo style={{fontWeight: "bold", color: colors.pale}}>Rooms Selected</OrderInfo>
                                    <br />

                                    {checkAvailabilityData.map((roomType, index) => (
                                        <PaymentInfoWrapper key={index}>
                                            <OrderInfo>{roomType.rooms.length}X {roomType.type} {roomType.rooms.length === 1 ? "Room" : "Rooms" } </OrderInfo>
                                            <OrderInfo>$ {(roomsInfo.find((room) => room.type === roomType.type)?.price)*roomType.rooms?.length}.00</OrderInfo>
                                        </PaymentInfoWrapper>
                                    ))}

                                    <br />
                                    <PaymentInfoWrapper>
                                        <OrderInfo>Total Amount</OrderInfo>
                                        <OrderInfo>$ {totalAmount}.00</OrderInfo>    
                                    </PaymentInfoWrapper> 
                                </InfoSectionWrapper>

                            </InfoContainer>
                        </Col>

                        <Col md={6}>
                            <div>
                                {clientSecret && stripePromise && (
                                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                                        <CheckoutForm />
                                    </Elements>
                                )}
                            </div>
                        </Col>
                    </Row>
                </ Container>
            </ContentWrapper>
        </ PageContainer>
    )
}

export default Payment