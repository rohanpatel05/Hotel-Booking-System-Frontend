import React from "react";
import styled, { keyframes } from "styled-components";
import colors from "../config/colors";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
`;

const Spinner = styled.div.attrs({
  className: "loading-spinner",
})`
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid ${colors.blue};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1.5s linear infinite;
`;

function OverlayedSpinner() {
  return (
    <Overlay>
      <Spinner data-testid="loading-spinner" />
    </Overlay>
  );
}

export default OverlayedSpinner;
