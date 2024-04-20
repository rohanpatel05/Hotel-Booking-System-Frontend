import styled from "styled-components";
import { Card, CardTitle, CardText } from "react-bootstrap";
import colors from "../../config/colors";

export const Title = styled.h1`
  padding: 130px 10px;
  font-family: KiwiMaruRegular;
  font-size: 60px;
  text-align: center;
`;

export const ReviewCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`;

export const ReviewCards = styled(Card)`
  width: 30%;

  background-color: ${colors.lightBeige};
  border-color: ${colors.lightBeige};
`;

export const RevieHeader = styled(CardTitle)`
  font-family: KiwiMaruRegular;
  font-size: 55px;
`;

export const RevieBody = styled(CardText)`
  font-family: KiwiMaruRegular;
  font-size: 20px;
`;

export const RevieFooter = styled(CardText)`
  font-family: KiwiMaruMedium;
  font-size: 20px;
`;
