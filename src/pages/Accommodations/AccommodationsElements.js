import styled from "styled-components";
import colors from "../../config/colors";
import { Container, Col } from "react-bootstrap";

export const Title = styled.h1`
  padding: 30px 10px;
  font-family: KiwiMaruRegular;
  font-size: 60px;
  text-align: center;
`;

export const StyledContainer = styled(Container)`
  border: 1px solid ${colors.navy};
  border-radius: 20px;
`;

export const StyledCol = styled(Col)`
  border-bottom: 1px solid ${colors.navy};
`;
