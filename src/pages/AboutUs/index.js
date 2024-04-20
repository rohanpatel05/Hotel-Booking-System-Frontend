import React from "react";
import { DBeigeBackgroundPageWrapper } from "../../config/styles";
import {
  Title,
  BodyWrapper,
  AboutUsTextCard,
  AboutUsText,
  ResortImageCard,
  ResortImage,
} from "./AboutUsElements";
import { CardBody } from "react-bootstrap";
import { ABOUT_US } from "../../config/textDescriptions";
import ResortPhoto from "../../assets/images/ResortSquaredPlaceholder.png";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <DBeigeBackgroundPageWrapper>
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
                  <ResortImage src={ResortPhoto} />
                </CardBody>
              </ResortImageCard>
            </Col>
          </Row>
        </Container>
      </BodyWrapper>
    </DBeigeBackgroundPageWrapper>
  );
}

export default AboutUs;
