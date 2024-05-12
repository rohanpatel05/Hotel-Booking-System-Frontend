import React from 'react'
import { StyledNavBrand, StyledNavLink, StyledNavDropdown } from './TopBarElements';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthStatus } from "../../hooks/useAuthStatus.js"
import { useSignOut } from "../../hooks/useSignOut.js"
import {OverlayedSpinner as Spinner} from "../../components/index.js";
import useAuth from '../../hooks/useAuth.js';

function TopBar() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStatus();
  const { authState } = useAuth();

  const { signOut, isLoading } = useSignOut(); 

  const handleSignInClick = () => {
    navigate("/signin");
  }

  const handleSignOut = () => {
    signOut();
  };

  if (isLoading) return <Spinner />;

  return (
    <Navbar sticky="top" >
      <Container>
        <StyledNavBrand href="/">The Hotel</StyledNavBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                {!isAuthenticated ? (                
                    <StyledNavLink onClick={handleSignInClick}>Sign in</StyledNavLink>
                ) : (
                    <StyledNavDropdown title={<span style={{color: 'white'}}>{authState.user.name}</span>} align="end">
                        <NavDropdown.Item >Account Info</NavDropdown.Item>
                        <NavDropdown.Item >Reservations</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
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