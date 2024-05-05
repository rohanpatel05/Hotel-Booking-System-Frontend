import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors';
import { useNavigate } from 'react-router-dom';

const TopBar = styled.div`
    width: 100%;
    height: 60px;  
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 48px;
`;

const Brand = styled.h1`
    font-family: Italianno;
    font-size: 50px;

    color: ${colors.white};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover {
        cursor: pointer;
    }
`;

function AuthTopBar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <TopBar>
            <Brand onClick={handleClick}>The Hotel</Brand>
        </TopBar>
    )
}

export default AuthTopBar