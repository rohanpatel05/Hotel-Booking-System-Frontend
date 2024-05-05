import React, {useState} from 'react'
import { StyledNavBrand, StyledNavLink, StyledNavDropdown } from './TopBarElements';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();
  
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignInClick = () => {
    navigate("/signin");
  }

  return (
    <Navbar sticky="top" >
      <Container>
        <StyledNavBrand href="/">The Hotel</StyledNavBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                {!isLoggedIn ? (                
                    <StyledNavLink onClick={handleSignInClick}>Sign in</StyledNavLink>
                ) : (
                    <StyledNavDropdown title={<text style={{color: 'white'}}>{"User's name"}</text>}>
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