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
    InstructionText
} from "./SignInElements.js";
import { AuthTopBar } from "../../components/index.js";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../config/regex";
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayedSpinner as Spinner } from "../../components/index.js";
import { useSignIn } from "../../hooks/useSignIn.js";

function SignIn() {
    const navigate = useNavigate();

    const userInputRef = useRef();

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailFocus, setEmailFocus] = useState (false);

    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState (false);

    const [canSubmit, setCanSubmit] = useState(false);

    const { mutate: signIn, isLoading, isError, error } = useSignIn();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (canSubmit) {
            const signInBody = {
                email,
                password,
            };
            signIn(signInBody);
        }
    };

    const handleSignUpClick = () => {
        navigate("/signup");
    }

    useEffect(() => {
        userInputRef.current.focus();
    }, [])

    useEffect(() => {
        setIsEmailValid(emailRegex.test(email));
    },[email])
    
    useEffect(() => {
        setIsPasswordValid(passwordRegex.test(password));
    },[password])

    useEffect(() => {
        setCanSubmit(
            email && isEmailValid && 
            password && isPasswordValid
        );
    }, [email, isEmailValid, password, isPasswordValid]);

    if (isLoading) return <Spinner />;

    return (
        <>
            <AuthTopBar/>
            
            <FormCard>
                <FormWrapper>
                    {isError && <ErrorMessage>{error.message}</ErrorMessage>}

                    <Title>Sign In</Title>

                    <Form onSubmit={handleSubmit}>
                        <InputLable>
                            Email:
                            <ValidationIcon icon={faCheck} isValid={true} show={isEmailValid} />
                            <ValidationIcon icon={faTimes} isValid={false} show={!isEmailValid && email} />
                            <Input
                            type="text"
                            id="email"
                            ref={userInputRef}
                            autoComplete="off"
                            autoCapitalize="off"
                            autoCorrect="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            />
                            {emailFocus && email && !isEmailValid ?
                                <InstructionText>
                                    <FontAwesomeIcon icon={faInfoCircle} /> 
                                    &ensp; Enter a valid email address. <br />
                                    For example, username@example.com. <br />
                                    Only lowercase letters, numbers, dots (.), underscores (_), and hyphens (-) are allowed before the @ symbol.
                                </InstructionText> : 
                                <></>            
                            }
                        </InputLable>

                        <InputLable>
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
                                <InstructionText>
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

                        <TextWrapper>
                            <NonClickableText>Need an account? </NonClickableText>
                            <ClickableText onClick={handleSignUpClick} >Sign Up</ClickableText>
                        </TextWrapper>

                        <Button type="submit" disabled={!canSubmit}>
                            Sign In
                        </Button>
                    </Form>
                </FormWrapper>
            </FormCard>
        </>
    )
}

export default SignIn