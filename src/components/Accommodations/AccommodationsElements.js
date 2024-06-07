import styled from "styled-components";
import colors from "../../config/colors";

export const Title = styled.h1`
  padding: 30px 10px;
  font-family: KiwiMaruRegular;
  font-size: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
    padding: 15px 10px;
  }

  @media (max-width: 240px) {
    font-size: 20px;
    padding: 15px 10px;
  }
`;

export const StyledContainer = styled.div`
  margin: 0px 30px;
  border: 1px solid ${colors.navy};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0px 15px;
  }

  @media (max-width: 480px) {
    margin: 0px 10px;
  }
`;

export const StyledRow = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.navy};
  }

  &:hover {
    background-color: ${colors.navy};
  }
`;

export const RoomCard = styled.div`
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    & > .text-wrapper > .room-title,
    & > .text-wrapper > .room-description {
      color: ${colors.white};
    }

    & > .room-image {
      height: 135px;
      opacity: 1;
      transform: translateX(0);
    }

    & > .arrow-icon {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RoomImage = styled.img`
  height: 0px;
  width: auto;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s ease, width 0.3s ease;
  opacity: 0;
  margin-right: 0;
  order: -1;
`;

export const TextWrapper = styled.div`
  padding: 20px 40px 5px;
  flex-grow: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px 20px;
  }
`;

export const RoomTitle = styled.h3`
  font-family: KiwiMaruMedium, sans-serif;
  font-size: 25px;
  color: ${colors.black};
  margin: 0;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const RoomDescription = styled.p`
  font-family: KiwiMaruRegular, sans-serif;
  font-size: 12px;
  color: ${colors.black};
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ArrowIcon = styled.div`
  background-color: ${colors.white};
  padding: 0px 20px;
  border-radius: 20px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(20px);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 10px;
  }
`;
