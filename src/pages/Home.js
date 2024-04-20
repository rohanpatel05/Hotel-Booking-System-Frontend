import React from "react";
import WelcomeSectiom from "./Welcome/index.js";
import GuestReviewSectiom from "./GuestReview/index.js";
import AboutUsSection from "./AboutUs/index.js";
import FooterSection from "../components/Footer/index.js";

function Home() {
  return (
    <>
      <WelcomeSectiom />
      <AboutUsSection />
      <GuestReviewSectiom />
      <FooterSection />
    </>
  );
}

export default Home;
