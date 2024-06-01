const groupReservationsByDate = (reservations) => {
  const groupedReservations = reservations.reduce((acc, reservation) => {
    const key = `${reservation.checkInDate}-${reservation.checkOutDate}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(reservation);
    return acc;
  }, {});
  return groupedReservations;
};

export default groupReservationsByDate;
