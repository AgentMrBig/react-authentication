import React, { Component } from 'react';
import styled from 'styled-components';

import MainNav from './components/MainNav/MainNav';
import LoginForm1 from './components/LoginForm1/LoginForm1';

const AppStyle = styled.div`
  text-align: center;
`



const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  height: 150px;
  
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
          <MainNav />


        </AppHeader>
        <AppIntro>
          
        </AppIntro>
        <LoginForm1 />
      </AppStyle>
    );
  }
}

export default App;
