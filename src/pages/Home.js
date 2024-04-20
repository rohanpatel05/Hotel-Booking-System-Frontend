import React from "react";
import WelcomeSectiom from "./Welcome/index.js";
import GuestReviewSectiom from "./GuestReview/index.js";
import AboutUsSection from "./AboutUs/index.js";

function Home() {
  return (
    <>
      <WelcomeSectiom />
      <AboutUsSection />
      <GuestReviewSectiom />
    </>
  );
}

export default Home;
