import styled from "styled-components";
import colors from "../../config/colors";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`;

export const InfoContainer = styled.div`
  padding: 25px;
  color: ${colors.white};
`;

export const InfoSectionWrapper = styled.div`
  margin-bottom: 20px;
`;

export const PaymentInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 85vw;
`;

export const Title = styled.h1`
  color: ${colors.pale};
  text-align: center;
  margin-bottom: 20px;
`;

export const OrderInfo = styled.span``;

export const InfoTitle = styled.h2`
  color: ${colors.pale};
`;
