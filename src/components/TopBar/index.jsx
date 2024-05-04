/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { StyledNavBrand, StyledNavLink, StyledNavDropdown } from './TopBarElements';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function TopBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Navbar sticky="top" >
      <Container>
        <StyledNavBrand href="/">The Hotel</StyledNavBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                {!isLoggedIn ? (                
                    <StyledNavLink>Sign in</StyledNavLink>
                ) : (
                    <StyledNavDropdown     title={<text style={{color: 'white'}}>{"User's name"}</text>}>
                        <NavDropdown.Item >Account Info</NavDropdown.Item>
                        <NavDropdown.Item >Reservations</NavDropdown.Item>
                        <NavDropdown.Item >Logout</NavDropdown.Item>
                    </StyledNavDropdown>
                )
                }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopBar