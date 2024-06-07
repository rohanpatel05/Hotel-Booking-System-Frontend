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

  @media (max-width: 768px) {
    font-size: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    padding-bottom: 30px;
  }
`;

export const StyledHr = styled.hr`
  border-top: 2px solid ${colors.white};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const AlignedText = styled.div`
  text-align: ${(props) => props.$align || "left"};
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: ${colors.pale};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
