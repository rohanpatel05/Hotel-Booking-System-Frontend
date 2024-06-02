import styled from "styled-components";
import colors from "../../config/colors";

export const NoReservationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
`;

export const NoReservationsMessage = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: KiwiMaruRegular;
  color: ${colors.white};
`;

export const BookNowButton = styled.button`
  display: block;
  margin: 40px auto;
  padding: 10px 20px;
  font-size: 1.25rem;
  color: ${colors.white};
  background-color: ${colors.maroon};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #933c38;
  }
`;

export const ReservationCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const ReservationDetails = styled.div`
  margin-top: 1rem;
`;
