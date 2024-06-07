import styled from "styled-components";
import { Card, CardText, CardImg } from "react-bootstrap";
import colors from "../../config/colors";

export const Title = styled.h1`
  padding: 30px 10px;
  font-family: KiwiMaruRegular;
  font-size: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    padding: 15px 10px;
  }
`;

export const BodyWrapper = styled.div`
  padding: 10px 40px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

export const AboutUsTextCard = styled(Card)`
  background-color: ${colors.lightBeige};
  border-color: ${colors.lightBeige};

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const AboutUsText = styled(CardText)`
  font-family: KiwiMaruRegular;
  font-size: 34px;

  @media (max-width: 1100px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ResortImageCard = styled(Card)`
  background-color: ${colors.lightBeige};
  border-color: ${colors.lightBeige};

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const ResortImage = styled(CardImg)`
  width: 100%;
  height: auto;
  object-fit: cover;

  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: block;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    border-radius: 5px;
  }

  @media (max-width: 480px) {
    border-radius: 3px;
  }
`;
