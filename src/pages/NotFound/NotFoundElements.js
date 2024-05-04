import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Heading = styled.h1`
  color: ${colors.softRed};
`;

export const Message = styled.p`
  color: ${colors.lightBeige};
`;

export const Link = styled.a`
  color: ${colors.pale};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
