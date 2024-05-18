import styled from "styled-components";
import colors from "../../config/colors";
import { DropdownButton, DropdownItem, DropdownMenu } from "react-bootstrap";

export const Heading = styled.h1`
  font-family: KiwiMaruMedium;
  font-size: 1.75rem;
  text-align: center;
  color: ${colors.white};
  padding: 20px 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 20px;
  background-color: ${colors.lightBeige};
  border-radius: 10px;
  max-width: 80%;
  margin: 0 auto;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${colors.lightBeige};
  padding: 0px 10px;
`;

export const Label = styled.label``;

export const AddRemoveButton = styled.button`
  color: ${colors.white};
  border-radius: 1rem;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: ${colors.maroon};
`;

export const Text = styled.span``;

export const RoomDropdownButton = styled(DropdownButton)`
  background-color: ${colors.maroon};
  color: ${colors.white};
  width: 100%;
  &:after {
    display: none;
  }
`;

export const RoomDropdownMenu = styled(DropdownMenu)`
  background-color: ${colors.lightBeige};
  margin-top: 0;
  right: 0;
`;

export const RoomDropdownItem = styled(DropdownItem)`
  background-color: ${colors.lightBeige};
  &:hover {
    background-color: ${colors.lightBeige};
  }
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 40px auto;
  padding: 10px 20px;
  font-size: 1.25rem;
  color: ${colors.white};
  background-color: ${colors.maroon};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #933c38;
  }

  &:active {
    background-color: #6d2b28;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: ${colors.maroon};
    cursor: not-allowed;
    &:hover {
      background-color: ${colors.maroon};
    }
    &:active {
      background-color: ${colors.maroon};
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const RoomAvailabilityBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  padding: 10px 20px;
  max-width: 80%;
`;

export const AvailableRoomText = styled.span`
  color: ${colors.brightGreen};
  font-family: KiwiMaruMedium;
  font-size: 1.5rem;
  text-align: center;
`;

export const NonAvailableRoomText = styled.span`
  color: ${colors.maroon};
  font-family: KiwiMaruMedium;
  font-size: 1.5rem;
  text-align: center;
`;

export const SignInPromptWrapper = styled.div`
  text-align: center;
`;

export const NonClickableText = styled.span`
  color: ${colors.darkBeige};
`;

export const ClickableText = styled.span`
  color: ${colors.pale};
  text-decoration: underline;
  cursor: pointer;
`;
