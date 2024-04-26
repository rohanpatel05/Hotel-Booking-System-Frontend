import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Heading = styled.h1`
  color: ${colors.darkGrey};
`;

export const Message = styled.p`
  color: ${colors.mediumGrey};
`;

export const Link = styled.a`
  color: ${colors.vibrantBlue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
