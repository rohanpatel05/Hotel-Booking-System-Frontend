import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;

export const Title = styled.h1`
  color: ${colors.white};
`;

export const TextWrapper = styled.div`
  padding: 0px;
  margin-top: 20px;
`;

export const NonClickableText = styled.span`
  color: ${colors.darkBeige};
`;

export const ClickableText = styled.span`
  color: ${colors.pale};
  text-decoration: underline;
  cursor: pointer;
`;
