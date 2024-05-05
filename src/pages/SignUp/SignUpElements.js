import styled from "styled-components";
import colors from "../../config/colors.js";

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
