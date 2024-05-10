import styled from "styled-components";
import colors from "../../config/colors.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  width: 350px;
  padding: 10px;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 40px;
`;

export const Form = styled.form``;

export const InputLable = styled.label`
  display: block;
  color: ${colors.darkBeige};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 10px;
  margin-top: 3px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 25px;
  margin-top: 10px;
  color: ${colors.white};
  background-color: ${(props) =>
    props.disabled ? colors.lightNavy : colors.mediumGrey};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? colors.lightNavy : colors.maroon};
  }
`;

export const TextWrapper = styled.div`
  padding: 0px;
  margin-top: 20px;
`;

export const NonClickableText = styled.text`
  color: ${colors.darkBeige};
`;

export const ClickableText = styled.text`
  color: ${colors.pale};
  text-decoration: underline;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${colors.maroon};
  font-size: 20px;
  aria-live="assertive"
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const ValidationIcon = styled(FontAwesomeIcon)`
  margin-left: 0.25rem;
  color: ${(props) => (props.isValid ? "limegreen" : "red")};
  display: ${(props) => (props.show ? "inline" : "none")};
`;

export const InstructionText = styled.p`
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  margin-right: 0.25rem;
`;
