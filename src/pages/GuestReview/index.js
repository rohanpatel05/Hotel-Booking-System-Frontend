import React from "react";
import { LBeigeBackgroundPageWrapper } from "../../config/styles.js";
import {
  Title,
  ReviewCardsWrapper,
  ReviewCards,
  RevieHeader,
  RevieBody,
  RevieFooter,
} from "./GuestReviewElements.js";
import { REVIEWS } from "../../config/textDescriptions";
import { CardBody } from "react-bootstrap";
function GuestReview() {
  return (
    <LBeigeBackgroundPageWrapper>
      <Title>What our guests says</Title>
      <ReviewCardsWrapper>
        {REVIEWS &&
          REVIEWS.map((review) => (
            <ReviewCards>
              <CardBody>
                <RevieHeader>“</RevieHeader>
                <RevieBody>{review.review}</RevieBody>
                <RevieFooter>{review.guestName}</RevieFooter>
              </CardBody>
            </ReviewCards>
          ))}
      </ReviewCardsWrapper>
    </LBeigeBackgroundPageWrapper>
  );
}

export default GuestReview;
