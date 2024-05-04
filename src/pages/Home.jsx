import React from "react";
import WelcomeSectiom from "./Welcome/index.jsx";
import GuestReviewSectiom from "./GuestReview/index.jsx";
import AccommodationsSection from "./Accommodations/index.jsx";
import AboutUsSection from "./AboutUs/index.jsx";
import FooterSection from "../components/Footer/index.jsx";

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
