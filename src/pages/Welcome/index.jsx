import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "./WelcomeElements.js";
import { WELCOMING_AD } from "../../config/textDescriptions.js";
import LandscapePhoto from "../../assets/images/ResortPlaceholder.png";

function Welcome() {
  const navigate = useNavigate();
  
  const handleAccommodationsClick = () => {
    const accommodationsElement = document.getElementById(
      "accommodations-section"
    );
    if (accommodationsElement) {
      accommodationsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNowClick = () => {
    navigate("/booking");
  }

  return (
    <NavyBackgroundPageWrapper>
      <TopBarWrapper>
        <TopBarFiller></TopBarFiller>
        <Brand>The Hotel</Brand>
        <ButtonWraper>
          <AccommodationsButton onClick={handleAccommodationsClick}>
            Accommodations
          </AccommodationsButton>
          <BookNowButton onClick={handleBookNowClick}>Book Now</BookNowButton>
        </ButtonWraper>
      </TopBarWrapper>
      <DescriptionTextWrapper>{WELCOMING_AD}</DescriptionTextWrapper>
      <LandscapeImage src={LandscapePhoto} alt="Landscape" />
    </NavyBackgroundPageWrapper>
  );
}

export default Welcome;
