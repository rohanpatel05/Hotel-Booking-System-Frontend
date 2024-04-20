import React from "react";
import { NavyBackgroundPageWrapper } from "../styles";
import {
  TopBarWrapper,
  TopBarFiller,
  Brand,
  ButtonWraper,
  AccommodationsButton,
  BookNowButton,
} from "./HomeElements.js";

function Home() {
  return (
    <NavyBackgroundPageWrapper>
      <TopBarWrapper>
        <TopBarFiller></TopBarFiller>
        <Brand>The Hotel</Brand>
        <ButtonWraper>
          <AccommodationsButton>Accommodations</AccommodationsButton>
          <BookNowButton>Book Now</BookNowButton>
        </ButtonWraper>
      </TopBarWrapper>
    </NavyBackgroundPageWrapper>
  );
}

export default Home;
