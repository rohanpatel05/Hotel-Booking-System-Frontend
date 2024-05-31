import React, { useEffect, useState } from 'react';
import { OverlayedSpinner as Spinner, StyledErrorAlert, TopBar } from '../../components/index.js';
import { 
  AddRemoveButton, 
  Field, 
  FormWrapper, 
  Heading, 
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
import { Dropdown } from 'react-bootstrap';
import { roomTypeMap } from '../../config/roomsMap.js';
import { useCheckAvailability } from "../../hooks/useCheckAvailability.js";
import { useAuthStatus } from "../../hooks/useAuthStatus.js"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAvailabilityData } from "../../features/availability/availabilitySlice";
import { DatePicker } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function Booking() {
  const MAX_ROOMS = 3;
  const MAX_ADULTS_PER_ROOM = 2;
  const MAX_CHILDREN_PER_ROOM = 2;
  const MAX_TOTAL_ROOMS = 9;
  const MAX_ADULTS = 18;
  const MAX_CHILDREN = 18;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAuthStatus();

  const [dateRange, setDateRange] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState({ Classic: 1, Deluxe: 0, Suite: 0 });
  const [totalRooms, setTotalRooms] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [roomAvailabilityMessages, setRoomAvailabilityMessages] = useState([]);
  const [allRoomsAvailable, setAllRoomsAvailable] = useState(false);
  const [displaySigninMessage, setDisplaySigninMessage] = useState(false);

  const {
    mutate: checkAvailability, 
    data: checkAvailabilityData, 
    isLoading: checkAvailabilityIsLoading, 
    isError: checkAvailabilityIsError, 
    error: checkAvailabilityError
  } = useCheckAvailability();

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
    return Array.isArray(dateRange) && dateRange.length === 2 && adults > 0;
  };
  
  const formatDateString = (date) => {
    return date.toISOString().split('T')[0];
  };

  const handleCheckAvailabilitySubmit = (event) => {
    event.preventDefault();

    setDropdownVisible(false);

    const formattedCheckInDate = dateRange.length === 2 ? formatDateString(dateRange[0]) : null;
    const formattedCheckOutDate = dateRange.length === 2 ? formatDateString(new Date(dateRange[1].setHours(0, 0, 0, 0))) : null;

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

  const handleBookNowSubmit = async (event) =>{
    event.preventDefault();

    if (!isAuthenticated) {
      setDisplaySigninMessage(true);
    } else {
      setDisplaySigninMessage(false);

      const formattedCheckInDate = dateRange.length === 2 ? formatDateString(dateRange[0]) : null;
      const formattedCheckOutDate = dateRange.length === 2 ? formatDateString(new Date(dateRange[1].setHours(0, 0, 0, 0))) : null;

      let amount = 0;

      checkAvailabilityData.forEach(type => {
          type.rooms.forEach(room => {
              amount += room.price;
          });
      });
      
      dispatch(setAvailabilityData({
        data: checkAvailabilityData,
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate,
        totalAmount: amount,
      }));
      navigate("/payment");
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

  if (checkAvailabilityIsLoading) return <Spinner />;

  return (
    <>
      <TopBar/>
      <Heading>{BOOKING_HEADING}</Heading>
      <FormWrapper>
        <Field>
          <div
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
          >
            <DatePicker
              id="datePicker"
              label="Check in - Check out"
              placeholder="Check in - Check out"
              selectionType="range"
              formatStyle="large"
              variant="double"
              value={dateRange}
              onChange={value => setDateRange(value)}
              minDate={new Date()}
              required
              icon={<FontAwesomeIcon icon={faCalendar} />}
            />
          </div>
        </Field>
        
        <Field>
          <Text>Adults:</Text>
          <AddRemoveButton onClick={() => handleAdultsChange(-1)} >-</AddRemoveButton>
          <Text id="adults">{adults}</Text>
          <AddRemoveButton onClick={() => handleAdultsChange(1)}>+</AddRemoveButton>
        </Field>

        <Field>
          <Text>Childrens:</Text>
          <AddRemoveButton onClick={() => handleChildrenChange(-1)} >-</AddRemoveButton>
          <Text id="children">{children}</Text>
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

      {checkAvailabilityIsError ? (
        <StyledErrorAlert variant="danger">
          Error checking availability&apos;s info: {checkAvailabilityError.message}
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