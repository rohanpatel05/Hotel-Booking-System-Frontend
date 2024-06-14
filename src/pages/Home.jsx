import React from "react";
import {
  WelcomeSection, 
  GuestReviewSection, 
  AccommodationsSection, 
  AboutUsSection, 
  FooterSection 
} from "../components/index.js";

function Home() {
  return (
    <>
      <WelcomeSection />
      <GuestReviewSection />
      <AccommodationsSection />
      <AboutUsSection />
      <FooterSection />
    </>
  );
}

export default Home;
