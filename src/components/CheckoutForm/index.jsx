import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Container, Card, Button, PaymentMessage } from "./CheckoutFormElements";
import { useCreateBooking } from "../../hooks/useCreateBooking"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { OverlayedSpinner as Spinner } from "../index"
import { axiosInstancePublic } from "../../config/axiosInstances";

export default function CheckoutForm() {
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [paymentErrorMessage, setPaymentErrorMessage] = useState(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const { data: checkAvailabilityData, checkInDate, checkOutDate, totalAmount } = useSelector(state => state.availability);

  const { mutate: createBooking, isLoading } = useCreateBooking();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    setIsProcessingPayment(true);
  
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    });
  
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setPaymentErrorMessage(error.message);
      } else {
        setPaymentErrorMessage("An unexpected error occurred.");
      }
      setIsProcessingPayment(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
  
      const paymentMethodId = paymentIntent.payment_method;
  
      try {
        const response = await axiosInstancePublic.post(`/payment/retrieve-payment-method`, {
          paymentMethodId: paymentMethodId,
        });
  
        const paymentMethod = response.data.type;
  
        const bookings = checkAvailabilityData.flatMap(roomType =>
          roomType.rooms.map(room => ({
            roomId: room.roomId,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
          }))
        );
  
        const createBookingBody = {
          bookings: bookings,
          totalAmount: totalAmount,
          paymentMethod: paymentMethod 
        };

  
        createBooking(createBookingBody, {
          onError: (error) => {
            if (error.response) {
              error.message =
                error.response.data.message || "Unknown error occurred.";
            } else {
              error.message = "Network error occurred!";
            }
            setPaymentErrorMessage(error.message);
          },
          onSuccess: () =>{
            navigate('/completion', { replace: true });
          },
          onSettled: () => {
            setIsProcessingPayment(false);
          }
        });
      } catch (error) {
        setPaymentErrorMessage("Failed to retrieve payment method details.");
        setIsProcessingPayment(false);
      }
    }
  };

  if (isLoading) return <Spinner />

  return (
    <Container>
      <Card>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <Button
            disabled={isProcessingPayment || !stripe || !elements}
            id="submit"
          >
            <span id="button-text">
              {isProcessingPayment ? "Processing ... " : "Pay now"}
            </span>
          </Button>
          {paymentErrorMessage && (
            <PaymentMessage id="payment-message">{paymentErrorMessage}</PaymentMessage>
          )}
        </form>
      </Card>
    </Container>
  );
}
