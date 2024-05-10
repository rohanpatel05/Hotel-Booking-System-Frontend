import React from "react";
import WelcomeSectiom from "../components/Welcome/index.jsx";
import GuestReviewSectiom from "../components/GuestReview/index.jsx";
import AccommodationsSection from "../components/Accommodations/index.jsx";
import AboutUsSection from "../components/AboutUs/index.jsx";
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
