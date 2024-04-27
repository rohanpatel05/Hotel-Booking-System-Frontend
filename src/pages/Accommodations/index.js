import React from "react";
import { DBeigeBackgroundPageWrapper } from "../../config/styles";
import {
  Title,
  StyledContainer,
  StyledRow,
  RoomCard,
  RoomImage,
  ArrowIcon,
  TextWrapper,
  RoomTitle,
  RoomDescription,
} from "./AccommodationsElements";
import { useQuery } from "@tanstack/react-query";
import { fetchRooms } from "../../services/roomService";
import { GET_ROOMS_QUERY_KEY } from "../../config/queryKeys";
import Spinner from "../../components/Spinner.js";
import StyledErrorAlert from "../../components/Error.js";
import RoomPhoto from "../../assets/images/RoomPlaceholder1.png";

function Accommodations() {
  const {
    data: rooms,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: [GET_ROOMS_QUERY_KEY],
    queryFn: fetchRooms,
  });

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <StyledErrorAlert variant="danger">
        Error loading rooms&apos; info: {error.message}
      </StyledErrorAlert>
    );

  return (
    <DBeigeBackgroundPageWrapper>
      <Title>Accommodations</Title>
      <StyledContainer>
        {rooms.map((room) => (
          <StyledRow key={room.id}>
            <RoomCard>
              <RoomImage
                className="room-image"
                src={RoomPhoto}
                alt={room.type}
              />
              <TextWrapper className="text-wrapper">
                <RoomTitle className="room-title">{room.type}</RoomTitle>
                <RoomDescription className="room-description">
                  {room.description}
                </RoomDescription>
              </TextWrapper>
              <ArrowIcon className="arrow-icon">➔</ArrowIcon>
            </RoomCard>
          </StyledRow>
        ))}
      </StyledContainer>
    </DBeigeBackgroundPageWrapper>
  );
}

export default Accommodations;
