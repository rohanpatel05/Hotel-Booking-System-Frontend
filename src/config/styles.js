import styled from "styled-components";
import colors from "./colors";

export const NavyBackgroundPageWrapper = styled.div`
  background-color: ${colors.navy};
  min-height: 100vh;

  border-bottom: 8px solid transparent;
  border-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      ${colors.darkBeige}
    )
    1;
`;

export const LBeigeBackgroundPageWrapper = styled.div`
  background-color: ${colors.lightBeige};
  min-height: 100vh;

  position: relative;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.15);
`;

export const DBeigeBackgroundPageWrapper = styled.div`
  background-color: ${colors.darkBeige};
  min-height: 100vh;

  position: relative;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.15);
`;

export const NavyBackgroundFooterWrapper = styled.div`
  background-color: ${colors.navy};
  min-height: 50vh;

  border-top: 8px solid transparent;
  border-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      ${colors.darkBeige}
    )
    1;
`;
