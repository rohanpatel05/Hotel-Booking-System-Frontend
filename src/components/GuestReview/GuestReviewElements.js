import styled from "styled-components";
import { Card, CardTitle, CardText } from "react-bootstrap";
import colors from "../../config/colors";

export const Title = styled.h1`
  padding: 130px 10px;
  font-family: KiwiMaruRegular;
  font-size: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 80px 10px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    padding: 60px 10px;
  }
`;

export const ReviewCards = styled(Card)`
  margin-bottom: 20px;
  background-color: ${colors.lightBeige};
  border-color: ${colors.lightBeige};

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const RevieHeader = styled(CardTitle)`
  font-family: KiwiMaruRegular;
  font-size: 55px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const RevieBody = styled(CardText)`
  font-family: KiwiMaruRegular;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const RevieFooter = styled(CardText)`
  font-family: KiwiMaruMedium;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
