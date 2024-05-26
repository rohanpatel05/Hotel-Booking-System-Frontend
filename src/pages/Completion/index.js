import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetAvailabilityData } from "../../features/availability/availabilitySlice";
import {
  Container,
  Title,
  TextWrapper,
  NonClickableText,
  ClickableText,
} from "./CompletionElements";
import { useNavigate } from "react-router-dom";

function Completion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    dispatch(resetAvailabilityData());
  }, []);

  return (
    <>
      <Container>
        <Title>
          Thank you! 🎉
          <br />
          Your booking is successful!
        </Title>
        <TextWrapper>
          <NonClickableText>
            You have successfully reserved rooms at The Hotel. See you soon!
          </NonClickableText>
          <br />
          <NonClickableText>Check here to go to the </NonClickableText>
          <ClickableText onClick={handleNavigation}>Home page</ClickableText>
        </TextWrapper>
      </Container>
    </>
  );
}

export default Completion;
