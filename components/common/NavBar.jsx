import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
width: 100%;
height: 2em;
top: 0;
background-color: red;
`;

const Test = styled.div`
width: 100%;
height: 4em;
background-color:green;
`;


const NavBar = () => {
    return (
        <>
        <NavBarContainer>
           {"NAV BAR"} 
        </NavBarContainer>
        <Test>
            {"kkkkkF"}
        </Test>
        </>
    )
};

export default NavBar;
