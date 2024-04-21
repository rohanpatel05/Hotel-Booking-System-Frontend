import React from "react";
import { DBeigeBackgroundPageWrapper } from "../../config/styles";
import { Title, StyledContainer, StyledCol } from "./AccommodationsElements";
import { Row, Col } from "react-bootstrap";

function Accommodations() {
  return (
    <DBeigeBackgroundPageWrapper>
      <Title>Accommodations</Title>
      <StyledContainer>
        <Row>
          <StyledCol>hi</StyledCol>
        </Row>
        <Row>
          <Col>hi</Col>
        </Row>
      </StyledContainer>
    </DBeigeBackgroundPageWrapper>
  );
}

export default Accommodations;
