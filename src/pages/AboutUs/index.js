import React from "react";
import { LBeigeBackgroundPageWrapper } from "../../config/styles";
import {
  Title,
  BodyWrapper,
  AboutUsTextCard,
  AboutUsText,
  ResortImageCard,
  ResortImage,
} from "./AboutUsElements";
import { ABOUT_US } from "../../config/textDescriptions";
import ResortPhoto from "../../assets/images/ResortSquaredPlaceholder.png";
import { Container, Row, Col, CardBody } from "react-bootstrap";

function AboutUs() {
  return (
    <LBeigeBackgroundPageWrapper>
      <Title>About Us</Title>
      <BodyWrapper>
        <Container fluid>
          <Row>
            <Col md={6}>
              <AboutUsTextCard>
                <CardBody>
                  <AboutUsText>{ABOUT_US}</AboutUsText>
                </CardBody>
              </AboutUsTextCard>
            </Col>
            <Col md={6}>
              <ResortImageCard>
                <CardBody>
                  <ResortImage src={ResortPhoto} alt="Resort image." />
                </CardBody>
              </ResortImageCard>
            </Col>
          </Row>
        </Container>
      </BodyWrapper>
    </LBeigeBackgroundPageWrapper>
  );
}

export default AboutUs;
