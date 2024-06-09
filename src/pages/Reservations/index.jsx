import React, { useState } from 'react';
import { TopBar, OverlayedSpinner as Spinner, StyledErrorAlert } from '../../components/index.js';
import { useQuery } from '@tanstack/react-query';
import { GET_RESERVATIONS_QUERY_KEY } from '../../config/queryKeys.js';
import { fetchReservations } from '../../services/bookingService.js';
import { useAuthStatus } from '../../hooks/useAuthStatus.js';
import { NotFound } from '../index.js';
import { useSelector } from 'react-redux';
import { 
    NoReservationsWrapper, 
    NoReservationsMessage, 
    BookNowButton, 
    ReservationCard, 
    ReservationDetails 
} from './ReservationsElements.js';
import { useNavigate } from 'react-router-dom';
import groupReservationsByDate from '../../config/groupReservationsByDate.js';
import { roomTypeMap } from '../../config/roomsMap.js';

function Reservations() {
    const isAuthenticated = useAuthStatus();
    const navigate = useNavigate();
    
    const rooms = useSelector((state) => state.rooms.value);
    const [selectedReservationKey, setSelectedReservationKey] = useState(null);

    const { data, isError, isLoading, error } = useQuery({
        queryKey: [GET_RESERVATIONS_QUERY_KEY],
        queryFn: () => fetchReservations(),
    });

    if (!isAuthenticated) {
        return <NotFound />;
    }

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return (
            <StyledErrorAlert variant="danger">
                Error fetching reservations: {error.message}
            </StyledErrorAlert>
        );
    }

    const groupedReservations = data ? groupReservationsByDate(data.booking) : {};

    return (
        <>
            <TopBar />
            {data.booking?.length === 0 ? (
                <NoReservationsWrapper>
                    <NoReservationsMessage>
                        You have not booked any rooms at The Hotel.
                    </NoReservationsMessage>
                    <BookNowButton onClick={() => navigate('/booking')}>
                        Book Now
                    </BookNowButton>
                </NoReservationsWrapper>
            ) : (
                Object.entries(groupedReservations).map(([key, reservations]) => (
                    <ReservationCard key={key} onClick={() => setSelectedReservationKey(key)}>
                        <div>
                            <strong>Check-In Date:</strong> {new Date(reservations[0].checkInDate).toLocaleDateString()}
                        </div>
                        <div>
                            <strong>Check-Out Date:</strong> {new Date(reservations[0].checkOutDate).toLocaleDateString()}
                        </div>
                        <div>
                            <strong>No. of Rooms:</strong> {reservations.length}
                        </div>
                        <div>
                            <strong>Total Price:</strong> ${reservations[0].totalAmount}
                        </div>

                        {selectedReservationKey === key && (
                            <ReservationDetails>
                                {reservations.map((reservation) => (
                                    <div key={reservation._id}>
                                        {reservation._id === reservations[0]?._id ? null : <br />}
                                        <div>
                                            <strong>
                                                {roomTypeMap[rooms.find(room => room._id === reservation.room).type] || rooms.find(room => room._id === reservation.room).type} 
                                            </strong>
                                        </div>
                                        <div>
                                            <strong>Room Number:</strong> {rooms.find(room => room._id === reservation.room).roomNumber}
                                        </div>
                                        <div>
                                            <strong>Status:</strong> {reservation.status}
                                        </div>
                                    </div>
                                ))}
                            </ReservationDetails>
                        )}
                    </ReservationCard>
                ))
            )}
        </>
    );
}

export default Reservations;
