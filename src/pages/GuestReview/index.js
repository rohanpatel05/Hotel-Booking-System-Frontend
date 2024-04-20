import React from "react";
import { LBeigeBackgroundPageWrapper } from "../../config/styles.js";
import {
  Title,
  ReviewCards,
  RevieHeader,
  RevieBody,
  RevieFooter,
} from "./GuestReviewElements.js";
import { REVIEWS } from "../../config/textDescriptions";
import { CardBody } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function GuestReview() {
  return (
    <LBeigeBackgroundPageWrapper>
      <Title>What our guests says</Title>
      <Container>
        <Row>
          {REVIEWS &&
            REVIEWS.map((review) => (
              <Col md={4} key={review.id}>
                <ReviewCards>
                  <CardBody>
                    <RevieHeader>“</RevieHeader>
                    <RevieBody>{review.review}</RevieBody>
                    <RevieFooter>{review.guestName}</RevieFooter>
                  </CardBody>
                </ReviewCards>
              </Col>
            ))}
        </Row>
      </Container>
    </LBeigeBackgroundPageWrapper>
  );
}

export default GuestReview;
