import React from 'react'
import { StyledNavBrand, StyledNavLink, StyledNavDropdown } from './TopBarElements';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStatus } from "../../hooks/useAuthStatus.js"
import { useSignOut } from "../../hooks/useSignOut.js"
import { OverlayedSpinner as Spinner } from "../../components/index.js";
import useAuth from '../../hooks/useAuth.js';

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currLocation = location.pathname;

  const isAuthenticated = useAuthStatus();
  const { authState } = useAuth();

  const { signOut, isLoading } = useSignOut(); 

  const handleBrandClick = () => {
    navigate("/");
  }

  const handleSignInClick = () => {
    navigate("/signin");
  }

  const handleSignOut = () => {
    signOut();
  };

  const handleReservations = () => {
    if (currLocation !== "/reservations") {
      navigate("/reservations");
    }
  }

  const handleUserInfo = () => {
    if (currLocation !== "/userinfo") {
      navigate("/userinfo");
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <Navbar>
      <Container>
        <StyledNavBrand onClick={handleBrandClick}>The Hotel</StyledNavBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                {!isAuthenticated ? (                
                    <StyledNavLink onClick={handleSignInClick}>Sign in</StyledNavLink>
                ) : (
                    <StyledNavDropdown title={<span style={{color: 'white'}}>{authState.user.name}</span>} align="end">
                        <NavDropdown.Item onClick={handleUserInfo}>Account Info</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleReservations}>Reservations</NavDropdown.Item>
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