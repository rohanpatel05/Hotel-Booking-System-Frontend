import styled from "styled-components";
import colors from "../../config/colors";

export const Title = styled.h1`
  text-align: center;
  font-family: Italianno;
  font-size: 50px;
  padding: 35px 10px;
  padding-bottom: 60px;
  color: ${colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledHr = styled.hr`
  border-top: 2px solid ${colors.white};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 60px;
`;

export const AlignedText = styled.div`
  text-align: ${(props) => props.$align || "left"};
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: ${colors.pale};
`;
