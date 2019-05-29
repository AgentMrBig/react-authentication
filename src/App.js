import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const AppStyle = styled.div`
  text-align: center;
`

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppIntro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <AppStyle>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppStyle>
    );
  }
}

export default App;
