import styled from "styled-components";
import { Card, CardImg, CardText } from "react-bootstrap";
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
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

export const InfoTextCard = styled(Card)`
  background-color: ${colors.darkBeige};
  border-color: ${colors.darkBeige};

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const InfoText = styled(CardText)`
  font-family: KiwiMaruRegular;
  font-size: 29px;

  @media (max-width: 1032px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const RoomImageCard = styled(Card)`
  background-color: ${colors.darkBeige};
  border-color: ${colors.darkBeige};

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const RoomImage = styled(CardImg)`
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
