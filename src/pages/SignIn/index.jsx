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
} from "./SignInElements.js";
import AuthTopBar from "../../components/AuthTopBar";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const [isValid, setIsValid] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

    const handleSignUpClick = () => {
        navigate("/signup");
    }

    useEffect(() => {
        setIsValid(
            formData.email &&
            formData.password
        );
    }, [formData]);

    return (
        <>
            <AuthTopBar/>
            
            <FormCard>
                <FormWrapper>
                    <Title>Sign In</Title>

                    <Form onSubmit={handleSubmit}>
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

                        <TextWrapper>
                            <NonClickableText>Need an account? </NonClickableText>
                            <ClickableText onClick={handleSignUpClick} >Sign Up</ClickableText>
                        </TextWrapper>

                        <Button type="submit" disabled={!isValid}>
                            Sign In
                        </Button>
                    </Form>
                </FormWrapper>
            </FormCard>
        </>
    )
}

export default SignIn