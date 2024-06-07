import React from "react";
import { NavyBackgroundFooterWrapper } from "../../config/styles";
import { Title, StyledHr, AlignedText } from "./FooterElements";
import { Container, Row, Col } from "react-bootstrap";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE_NUMBER,
  COMPANY_FACEBOOK,
  COMPANY_INSTAGRAM,
  COMPANY_POLICY,
} from "../../config/textDescriptions";

function Footer() {
  return (
    <NavyBackgroundFooterWrapper>
      <Title>The Hotel</Title>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <AlignedText $align="left">{COMPANY_ADDRESS}</AlignedText>
          </Col>
          <Col xs={12} md={4}>
            <AlignedText $align="center">{COMPANY_EMAIL}</AlignedText>
          </Col>
          <Col xs={12} md={4}>
            <AlignedText $align="right">{COMPANY_PHONE_NUMBER}</AlignedText>
          </Col>
        </Row>
        <StyledHr />
        <Row>
          <Col xs={12} md={4}>
            <AlignedText $align="left">{COMPANY_FACEBOOK}</AlignedText>
          </Col>
          <Col xs={12} md={4}>
            <AlignedText $align="center">{COMPANY_INSTAGRAM}</AlignedText>
          </Col>
          <Col xs={12} md={4}>
            <AlignedText $align="right">{COMPANY_POLICY}</AlignedText>
          </Col>
        </Row>
        <StyledHr />
      </Container>
    </NavyBackgroundFooterWrapper>
  );
}

export default Footer;
