import React from "react";
import { NavyBackgroundPageWrapper } from "../../config/styles.js";
import {
  TopBarWrapper,
  TopBarFiller,
  Brand,
  ButtonWraper,
  AccommodationsButton,
  BookNowButton,
  DescriptionTextWrapper,
  LandscapeImage,
} from "./HomeElements.js";
import { WELCOMING_AD } from "../../config/textDescriptions.js";
import LandscapePhoto from "../../assets/images/ResortPlaceholder.png";

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
      <LandscapeImage src={LandscapePhoto} alt="Landscape" />
    </NavyBackgroundPageWrapper>
  );
}

export default Home;
