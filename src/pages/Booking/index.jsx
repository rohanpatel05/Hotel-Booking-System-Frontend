import React, { useEffect, useState } from 'react';
import { OverlayedSpinner as Spinner, StyledErrorAlert, TopBar } from '../../components/index.js';
import { 
  AddRemoveButton, 
  Field, 
  FormWrapper, 
  Heading, 
  Label, 
  Text, 
  RoomDropdownButton, 
  RoomDropdownMenu, 
  RoomDropdownItem, 
  SubmitButton,
  RoomAvailabilityBlock,
  AvailableRoomText,
  NonAvailableRoomText,
  NonClickableText,
  ClickableText,
  SignInPromptWrapper
} from "./BookingElements.js";
import { BOOKING_HEADING } from '../../config/textDescriptions.js';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Dropdown } from 'react-bootstrap';
import { roomTypeMap } from '../../config/roomsMap.js';
import { useCheckAvailability } from "../../hooks/useCheckAvailability.js";
import { useAuthStatus } from "../../hooks/useAuthStatus.js"
import { useNavigate } from "react-router-dom";

function Booking() {
  const MAX_ROOMS = 3;
  const MAX_ADULTS_PER_ROOM = 2;
  const MAX_CHILDREN_PER_ROOM = 2;
  const MAX_TOTAL_ROOMS = 9;
  const MAX_ADULTS = 18;
  const MAX_CHILDREN = 18;

  const navigate = useNavigate();
  const isAuthenticated = useAuthStatus();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState({ Classic: 1, Deluxe: 0, Suite: 0 });
  const [totalRooms, setTotalRooms] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [roomAvailabilityMessages, setRoomAvailabilityMessages] = useState([]);
  const [allRoomsAvailable, setAllRoomsAvailable] = useState(false);
  const [displaySigninMessage, setDisplaySigninMessage] = useState(false);

  const {mutate: checkAvailability, data: checkAvailabilityData, isLoading, isError, error} = useCheckAvailability();

  const handleAdultsChange = (amount) => {
    const max = Math.min(MAX_ADULTS, totalRooms * 2)
    setAdults((prev) => Math.max(1, Math.min(prev + amount, max)));
  };

  const handleChildrenChange = (amount) => {
    const max = Math.min(MAX_CHILDREN, totalRooms * 2)
    setChildren((prev) => Math.max(0, Math.min(prev + amount, max)));
  };

  const handleRoomsChange = (type, amount) => {
    setRooms((prev) => ({
      ...prev,
      [type]: Math.max(0, Math.min(prev[type] + amount, MAX_ROOMS)),
    }));
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const isFormValid = () => {
    return checkInDate && checkOutDate && adults > 0;
  };

  const handleCheckAvailabilitySubmit = (event) => {
    event.preventDefault();

    setDropdownVisible(false);

    const formattedCheckInDate = checkInDate ? checkInDate.format('YYYY-MM-DD') : null;
    const formattedCheckOutDate = checkOutDate ? checkOutDate.format('YYYY-MM-DD') : null;

    if (isFormValid()) {
      const checkAvailabilityBody = {
        requests: Object.keys(rooms)
          .filter((type) => (rooms[type] > 0))
          .map((type) => ({
            type: type,
            quantity: rooms[type],
            checkInDate: formattedCheckInDate,
            checkOutDate: formattedCheckOutDate
          }))
      };
      checkAvailability(checkAvailabilityBody);
    } 
  };

  const handleBookNowSubmit = (event) =>{
    event.preventDefault();

    if (!isAuthenticated) {
      setDisplaySigninMessage(true);
    } else {
      setDisplaySigninMessage(false);
    }
    
  }

  const handleSignInClick = () => {
    navigate("/signin");
  }

  useEffect(() => {
    const handleRoomIncrement = async () =>{
      const total = Math.min(rooms.Classic + rooms.Deluxe + rooms.Suite, MAX_TOTAL_ROOMS);
      setTotalRooms(total);

      if (total === 0) {
        setRooms({ Classic: 1, Deluxe: 0, Suite: 0 });
        setTotalRooms(1);
      }

      if (adults < total) {
        setAdults(total);
      }

      if (adults > total * MAX_ADULTS_PER_ROOM) {
        setAdults(total * MAX_ADULTS_PER_ROOM);
      }

      if (children > total * MAX_CHILDREN_PER_ROOM) {
        setChildren(total * MAX_ADULTS_PER_ROOM);
      }
    }

    handleRoomIncrement();
  },[rooms])

  useEffect(() => {
    if (checkAvailabilityData) {
      const allAvailable = checkAvailabilityData.every(result => result.available);
      setAllRoomsAvailable(allAvailable);

      const messages = checkAvailabilityData.map(result => {
        if (result.available) {
          return (
            <AvailableRoomText key={result.type}>
              All desired {result.type} rooms are available.
            </AvailableRoomText>
          );
        } else if (result.quantityAvailable === 0) {
          return (
            <NonAvailableRoomText key={result.type}>
              No {result.type} rooms are available.
            </NonAvailableRoomText>
          );
        } else {
          return (
            <NonAvailableRoomText key={result.type}>
              Only {result.quantityAvailable} of {result.quantityRequested} desired {result.type} rooms are available.
            </NonAvailableRoomText>
          );
        }
      });

      setRoomAvailabilityMessages(messages);
    }
  }, [checkAvailabilityData]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <TopBar/>
      <Heading>{BOOKING_HEADING}</Heading>
      <FormWrapper>
        <Field>
        <DateRangePicker
            startDate={checkInDate}
            startDateId="startDate"
            startDatePlaceholderText='Check In'
            endDate={checkOutDate}
            endDateId="endDate"
            endDatePlaceholderText='Check Out'
            onDatesChange={({ startDate, endDate }) => {
              setCheckInDate(startDate);
              setCheckOutDate(endDate);
            }}
            focusedInput={focusedInput}
            onFocusChange={setFocusedInput}
            minimumNights={1}
          />
        </Field>
        
        <Field>
          <Label>Adults:</Label>
          <AddRemoveButton onClick={() => handleAdultsChange(-1)} >-</AddRemoveButton>
          <Text>{adults}</Text>
          <AddRemoveButton onClick={() => handleAdultsChange(1)}>+</AddRemoveButton>
        </Field>

        <Field>
          <Label>Childrens:</Label>
          <AddRemoveButton onClick={() => handleChildrenChange(-1)} >-</AddRemoveButton>
          <Text>{children}</Text>
          <AddRemoveButton onClick={() => handleChildrenChange(1)}>+</AddRemoveButton>
        </Field>

        <Field>
          <Dropdown show={dropdownVisible} >
            <RoomDropdownButton as={Dropdown.Toggle} variant="none" onClick={toggleDropdown}>
              Rooms
            </RoomDropdownButton>
            <RoomDropdownMenu as={Dropdown.Menu} align="end" show>
              {Object.keys(rooms).map((type) => (
                <RoomDropdownItem key={type} as="div">
                  <Field>
                  <Text>{roomTypeMap[type]}</Text>
                  <AddRemoveButton onClick={() => handleRoomsChange(type, -1)}>-</AddRemoveButton>
                  <Text>{rooms[type]}</Text>
                  <AddRemoveButton onClick={() => handleRoomsChange(type, 1)}>+</AddRemoveButton>
                  </Field>
                </RoomDropdownItem>
              ))}
            </RoomDropdownMenu>
          </Dropdown>
        </Field>
      </FormWrapper>

      <SubmitButton disabled={!isFormValid()} onClick={handleCheckAvailabilitySubmit}>Check Availability</SubmitButton>

      {isError ? (
        <StyledErrorAlert variant="danger">
          Error checking availability&apos;s info: {error.message}
        </StyledErrorAlert>
      ) : allRoomsAvailable ? (
        <>
          <RoomAvailabilityBlock>
            <AvailableRoomText>
              All desired rooms are available!
            </AvailableRoomText>
          </RoomAvailabilityBlock>
          <SubmitButton onClick={handleBookNowSubmit}>Book Now</SubmitButton>
          {displaySigninMessage &&
          <SignInPromptWrapper>
            <NonClickableText>To start the booking process please </NonClickableText>
            <ClickableText onClick={handleSignInClick} >Sign In</ClickableText>
          </SignInPromptWrapper>}
        </>
      ) : (
        roomAvailabilityMessages.map((message, index) => (
          <RoomAvailabilityBlock key={index}>
            {message}
          </RoomAvailabilityBlock>
        ))
      )}
    </>
  )
}

export default Booking