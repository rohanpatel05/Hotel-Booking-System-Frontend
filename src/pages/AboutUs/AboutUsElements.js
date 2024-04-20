import styled from "styled-components";
import { Card, CardText, CardImg } from "react-bootstrap";
import colors from "../../config/colors";

export const Title = styled.h1`
  padding: 30px 10px;
  font-family: KiwiMaruRegular;
  font-size: 60px;
  text-align: center;
`;

export const BodyWrapper = styled.div`
  padding: 10px 40px;
`;

export const AboutUsTextCard = styled(Card)`
  background-color: ${colors.darkBeige};
  border-color: ${colors.darkBeige};
`;

export const AboutUsText = styled(CardText)`
  font-family: KiwiMaruRegular;
  font-size: 34px;
`;
export const ResortImageCard = styled(Card)`
  background-color: ${colors.darkBeige};
  border-color: ${colors.darkBeige};
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
`;
