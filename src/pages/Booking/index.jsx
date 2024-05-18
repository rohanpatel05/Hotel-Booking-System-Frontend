import React, { useEffect, useState } from 'react'
import { TopBar } from '../../components/index.js'
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
  CheckAvailabilitybutton
} from "./BookingElements.js";
import { BOOKING_HEADING } from '../../config/textDescriptions.js';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Dropdown } from 'react-bootstrap';

function Booking() {
  const MAX_ROOMS = 3;
  const MAX_ADULTS_PER_ROOM = 2;
  const MAX_CHILDREN_PER_ROOM = 2;
  const MAX_TOTAL_ROOMS = 9;
  const MAX_ADULTS = 18;
  const MAX_CHILDREN = 18;

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState({ classic: 1, deluxe: 0, suite: 0 });
  const [totalRooms, setTotalRooms] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log('Booking details:');
    } else {
      console.log('Form is not valid');
    }
  };

  useEffect(() => {
    const handleRoomIncrement = async () =>{
      const total = Math.min(rooms.classic + rooms.deluxe + rooms.suite, MAX_TOTAL_ROOMS);
      setTotalRooms(total);

      if (total === 0) {
        setRooms({ classic: 1, deluxe: 0, suite: 0 });
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
                    <Label>{`${type.charAt(0).toUpperCase() + type.slice(1)} Rooms:`}</Label>
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

      <CheckAvailabilitybutton disabled={!isFormValid()} onClick={handleSubmit}>Check Availability</CheckAvailabilitybutton>
    </>
  )
}

export default Booking