import styled from "styled-components";
import { NavbarBrand, NavLink, NavDropdown } from "react-bootstrap";
import colors from "../../config/colors";

export const StyledNavBrand = styled(NavbarBrand)`
  font-family: Italianno;
  font-size: 50px;
  color: ${colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    color: ${colors.white};
  }
`;

export const StyledNavLink = styled(NavLink)`
  background-color: ${colors.white};
  border-color: ${colors.white};
  border-radius: 20px;
  font-family: "Inter", sans-serif;

  font-size: 15px;
  font-weight: bold;
  color: ${colors.black};
  &:hover {
    background-color: #007bff;
    color: ${colors.white};
  }
`;

export const StyledNavDropdown = styled(NavDropdown)`
  font-family: KiwiMaruRegular;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;
