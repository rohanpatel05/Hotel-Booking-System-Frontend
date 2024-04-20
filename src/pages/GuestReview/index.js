import React from "react";
import { LBeigeBackgroundPageWrapper } from "../../config/styles.js";
import {
  Title,
  ReviewCardsWrapper,
  ReviewCards,
  RevieHeader,
  RevieBody,
  RevieFooter,
} from "./GuestReview";
import { REVIEWS } from "../../config/textDescriptions";

function GuestReview() {
  return (
    <LBeigeBackgroundPageWrapper>
      <Title>What our guests says</Title>
      <ReviewCardsWrapper>
        {REVIEWS &&
          REVIEWS.map((review) => (
            <ReviewCards>
              <RevieHeader>“</RevieHeader>
              <RevieBody>{review.review}</RevieBody>
              <RevieFooter>{review.guestName}</RevieFooter>
            </ReviewCards>
          ))}
      </ReviewCardsWrapper>
    </LBeigeBackgroundPageWrapper>
  );
}

export default GuestReview;
