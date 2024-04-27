import React, { useState, useEffect } from "react";
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
import { fetchRooms } from "../../services/roomService.js";
import { GET_ROOMS_QUERY_KEY } from "../../config/queryKeys";
import Spinner from "../../components/Spinner.js";
import StyledErrorAlert from "../../components/Error.js";
import RoomPhoto from "../../assets/images/RoomPlaceholder1.png";
import { roomTypeMap } from "../../config/roomsMap.js";
import { useDispatch, useSelector } from "react-redux";
import { updateRooms } from "../../features/rooms/roomsSlice";

function Accommodations() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.value);

  const [uniqueRooms, setUniqueRooms] = useState([]);

  const {
    data: roomsData,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: [GET_ROOMS_QUERY_KEY],
    queryFn: fetchRooms,
  });

  useEffect(() => {
    const processRooms = async () => {
      if (!isLoading && isSuccess) {
        dispatch(updateRooms(roomsData));
        const uniqueRooms = getUniqueRoomTypes(rooms);
        setUniqueRooms(uniqueRooms);
      }
    };

    processRooms();
  }, [roomsData, isLoading, isSuccess, dispatch, rooms]);

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <StyledErrorAlert variant="danger">
        Error loading rooms&apos; info: {error.message}
      </StyledErrorAlert>
    );

  const getUniqueRoomTypes = (rooms) => {
    const uniqueRooms = [];
    const seenTypes = new Set();

    rooms.forEach((room) => {
      if (!seenTypes.has(room.type)) {
        seenTypes.add(room.type);
        uniqueRooms.push(room);
      }
    });

    return uniqueRooms;
  };

  return (
    <DBeigeBackgroundPageWrapper id="accommodations-section">
      <Title>Accommodations</Title>
      <StyledContainer>
        {uniqueRooms.map((room, index) => (
          <StyledRow key={room.id || index}>
            <RoomCard>
              <RoomImage
                className="room-image"
                src={RoomPhoto}
                alt={room.type}
              />
              <TextWrapper className="text-wrapper">
                <RoomTitle className="room-title">
                  {roomTypeMap[room.type] || room.type}
                </RoomTitle>
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
