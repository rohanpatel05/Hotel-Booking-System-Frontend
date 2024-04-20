import styled from "styled-components";
import { Button } from "react-bootstrap";
import colors from "../../config/colors";

export const TopBarWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px 35px 0px;
`;

export const TopBarFiller = styled.div`
  width: 225px;
  height: 55px;
`;

export const Brand = styled.h1`
  font-family: Italianno;
  font-size: 50px;

  color: ${colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonWraper = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
`;

export const AccommodationsButton = styled(Button)`
  background-color: ${colors.navy};
  border-color: ${colors.white};
  border-radius: 35px;
  font-family: "Inter", sans-serif;

  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
`;

export const BookNowButton = styled(Button)`
  background-color: ${colors.white};
  border-color: ${colors.white};
  border-radius: 35px;
  font-family: "Inter", sans-serif;

  font-size: 15px;
  font-weight: bold;
  color: black;
`;

export const DescriptionTextWrapper = styled.p`
  text-align: center;
  font-family: KiwiMaruRegular;
  color: ${colors.white};
  font-size: 50px;
  white-space: pre-line;
  padding: 30px 0px;
`;

export const LandscapeImage = styled.img`
  width: 75%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;
