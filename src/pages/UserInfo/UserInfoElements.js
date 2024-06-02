import styled from "styled-components";
import { Card, Button, Form } from "react-bootstrap";
import colors from "../../config/colors";

export const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

export const StyledButton = styled(Button)`
  margin: 0 5px;

  &.link {
    text-decoration: none;
    color: #007bff;

    &:hover {
      text-decoration: none;
      color: #0056b3;
    }

    &:focus {
      text-decoration: none;
      color: #0056b3;
    }
  }
`;

export const StyledForm = styled(Form)`
  .form-label {
    font-weight: bold;
  }
`;

export const CardTitle = styled(Card.Title)`
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  color: ${colors.maroon};
  margin: 0 5px;
`;

export const SuccessMessage = styled.p`
  color: ${colors.brightGreen};
  margin: 0 5px;
`;
