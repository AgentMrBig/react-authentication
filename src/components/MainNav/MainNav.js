import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../../src/dev.png';
import logo from '../../../src/logo.svg';
import TweenMax from 'gsap';

const MainNavContainer = styled.div`
    display: flex;
    border: solid 1px blue;
    justify-content: space-between;
`
const LogoImage = styled.img`
    height: 4rem;
`

const AskAI = styled.input`
    width: 15rem;
`

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`
// GSAP animations
window.onload = () => {
    var devLogo = document.querySelector('#Logo');
    TweenMax.to(devLogo, 2, { right: 600 });
    console.log('window loaded');
}

const MainNav = props => {
    return (
        <MainNavContainer>
            <LogoImage id="Logo" alt="Logo" src={Logo} />
            <AppLogo src={logo} alt="logo" />
            <AskAI type="Search" placeholder="Ask my assistant any question." onKeyDown={props.searchPosts} />

        </MainNavContainer>
    )
}

export default MainNav;