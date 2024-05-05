import React, { useState, useEffect } from "react";
import {
  FormCard,
  FormWrapper,
  Title,
  Form,
  InputLable,
  Input,
  Button,
  TextWrapper,
  ClickableText,
  NonClickableText,
} from "./SignUpElements";
import AuthTopBar from "../../components/AuthTopBar";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignInClick = () => {
    navigate("/signin")
  }

  useEffect(() => {
    setIsValid(
      formData.name &&
        formData.email &&
        formData.password &&
        formData.confirmPassword
    );
  }, [formData]);

  return (
    <>
    <AuthTopBar/>
    
    <FormCard>
      <FormWrapper>
        <Title>Sign Up</Title>

        <Form onSubmit={handleSubmit}>
          <InputLable>
            Name:
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </InputLable>
          <InputLable>
            Email:
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </InputLable>
          <InputLable>
            Password:
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </InputLable>
          <InputLable>
            Confirm Password:
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </InputLable>

          <TextWrapper>
            <NonClickableText>Already have an account? </NonClickableText>
            <ClickableText onClick={handleSignInClick} >Sign In</ClickableText>
          </TextWrapper>

          <Button type="submit" disabled={!isValid}>
            Sign Up
          </Button>
        </Form>
      </FormWrapper>
    </FormCard>
    </>
  );
}

export default SignUp;
