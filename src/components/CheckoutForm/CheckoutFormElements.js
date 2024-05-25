import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background-color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const Button = styled.button`
  background: #635bff;
  border-radius: 3px;
  color: white;
  border: 0;
  padding: 12px 16px;
  margin-top: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;

  &:hover {
    filter: contrast(115%);
  }

  &:active {
    transform: translateY(0px) scale(0.98);
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: none;
  }
`;

export const PaymentMessage = styled.div`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New";
  color: ${colors.maroon};
  margin: 20px 0;
  border-radius: 3px;
  font-size: 0.9em;
`;
