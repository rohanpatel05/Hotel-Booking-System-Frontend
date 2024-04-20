import React from "react";
import WelcomeSectiom from "./Welcome/index.js";
import GuestReviewSectiom from "./GuestReview/index.js";
import AccommodationsSection from "./Accommodations/index.js";
import AboutUsSection from "./AboutUs/index.js";
import FooterSection from "../components/Footer/index.js";

function Home() {
  return (
    <>
      <WelcomeSectiom />
      <GuestReviewSectiom />
      <AccommodationsSection />
      <AboutUsSection />
      <FooterSection />
    </>
  );
}

export default Home;
