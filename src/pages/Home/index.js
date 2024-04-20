import React from "react";
import { NavyBackgroundPageWrapper } from "../styles";
import {
  TopBarWrapper,
  TopBarFiller,
  Brand,
  ButtonWraper,
  AccommodationsButton,
  BookNowButton,
  DescriptionTextWrapper,
} from "./HomeElements.js";
import { WELCOMING_AD } from "../../config/textDescriptions.js";

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
      <DescriptionTextWrapper>{WELCOMING_AD}</DescriptionTextWrapper>
    </NavyBackgroundPageWrapper>
  );
}

export default Home;
