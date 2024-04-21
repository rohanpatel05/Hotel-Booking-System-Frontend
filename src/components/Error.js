import styled from "styled-components";
import { Alert } from "react-bootstrap";
import colors from "../config/colors";

const StyledErrorAlert = styled(Alert)`
  background-color: ${colors.lightRed};
  color: ${colors.darkRed};
  border-color: ${colors.softRed};
  border-radius: 0.25rem;
  padding: 20px;
  margin: 20px 0px;
  text-align: center;
  font-size: 16px;
`;

export default StyledErrorAlert;
