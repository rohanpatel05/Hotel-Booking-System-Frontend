import React, { useState, useEffect, useRef } from "react";
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
  ErrorMessage,
  ValidationIcon,
  InstructionText,
} from "./SignUpElements";
import { AuthTopBar } from "../../components/index.js";
import { useNavigate } from "react-router-dom";
import { nameRegex, emailRegex, passwordRegex } from "../../config/regex";
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {OverlayedSpinner as Spinner} from "../../components/index.js";
import { useSignUp } from "../../hooks/useSignUp.js";

function SignUp() {
  const navigate = useNavigate();

  const userInputRef = useRef();

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameFocus, setNameFocus] = useState (false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState (false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState (false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState (false);

  const [canSubmit, setCanSubmit] = useState(false);

  const {mutate: signUp, isLoading, isError, error} = useSignUp();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (canSubmit) {
      const signUpBody = {
        name,
        email,
        password,
      };
      signUp(signUpBody);
    }
  };

  const handleSignInClick = () => {
    navigate("/signin");
  }

  useEffect(() => {
    userInputRef.current.focus();
  }, [])

  useEffect(() => {
    setIsNameValid(nameRegex.test(name));
  },[name])

  useEffect(() => {
    setIsEmailValid(emailRegex.test(email));
  },[email])

  useEffect(() => {
    setIsPasswordValid(passwordRegex.test(password));
    setIsConfirmPasswordValid(confirmPassword && password === confirmPassword);
  },[password, confirmPassword])

  useEffect(() => {
    setCanSubmit(
      name && isNameValid && 
      email && isEmailValid && 
      password && isPasswordValid && 
      confirmPassword && isConfirmPasswordValid
    );
  }, [name, isNameValid, email, isEmailValid, password, isPasswordValid, confirmPassword, isConfirmPasswordValid]);

  if (isLoading) return <Spinner />;

  return (
    <>
    <AuthTopBar/>
    
    <FormCard>
      <FormWrapper>
        {isError && <ErrorMessage>{error.message}</ErrorMessage>}

        <Title>Sign Up</Title>

        <Form onSubmit={handleSubmit}>
          <InputLable htmlFor="name">
            Name:
            <ValidationIcon icon={faCheck} isValid={true} show={isNameValid} />
            <ValidationIcon icon={faTimes} isValid={false} show={!isNameValid && name} />
            <Input
              type="text"
              id="name"
              ref={userInputRef}
              autoComplete="off"
              autoCorrect="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />
            {nameFocus && name && !isNameValid ?
              <InstructionText isVisible>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                &ensp; Please only enter alphabetic characters. <br />
                If multiple words, separate them with a space. <br /> 
                Do not end with a space.
              </InstructionText> : 
              <></>            
              }
          </InputLable>

          <InputLable htmlFor="email">
            Email:
            <ValidationIcon icon={faCheck} isValid={true} show={isEmailValid} />
            <ValidationIcon icon={faTimes} isValid={false} show={!isEmailValid && email} />
            <Input
              type="text"
              id="email"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            {emailFocus && email && !isEmailValid ?
              <InstructionText isVisible>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                &ensp; Enter a valid email address. <br />
                For example, username@example.com. <br />
                Only lowercase letters, numbers, dots (.), underscores (_), and hyphens (-) are allowed before the @ symbol.
              </InstructionText> : 
              <></>            
            }
          </InputLable>

          <InputLable htmlFor="password">
            Password:
            <ValidationIcon icon={faCheck} isValid={true} show={isPasswordValid} />
            <ValidationIcon icon={faTimes} isValid={false} show={!isPasswordValid && password} />
            <Input
              type="password"
              id="password"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            {passwordFocus && password && !isPasswordValid ?
              <InstructionText isVisible>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                &ensp; Password must contain: <br />
                - 8-16 characters <br />
                - At least one uppercase letter <br />
                - At least one lowercase letter <br />
                - At least one number <br />
                - At least one special character: !, @, #, $, %, ^, &, *, (,)
              </InstructionText> : 
              <></>            
            }
          </InputLable>

          <InputLable htmlFor="confirmPassword">
            Confirm Password:
            <ValidationIcon icon={faCheck} isValid={true} show={isConfirmPasswordValid} />
            <ValidationIcon icon={faTimes} isValid={false} show={!isConfirmPasswordValid && confirmPassword} />
            <Input
              type="password"
              id="confirmPassword"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
            {confirmPasswordFocus && confirmPassword && !isConfirmPasswordValid ?
              <InstructionText isVisible>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                &ensp; Re-enter your password to confirm. <br />
                Must match with your password.
              </InstructionText> : 
              <></>            
              }
          </InputLable>

          <TextWrapper>
            <NonClickableText>Already have an account? </NonClickableText>
            <ClickableText onClick={handleSignInClick} >Sign In</ClickableText>
          </TextWrapper>

          <Button type="submit" disabled={!canSubmit}>
            Sign Up
          </Button>
        </Form>
      </FormWrapper>
    </FormCard>
    </>
  );
}

export default SignUp;
