import React, { Component } from 'react';
import styled from 'styled-components';


const FBtn = styled.button`
    background: #eb1f48;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-family: Roboto;
  font-size: 1.9em;
  height: 65px;
  letter-spacing: .2px;
  line-height: 65px;
  text-align: center;
  text-transform: uppercase;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  width: 150px;

  &:hover {
    background: blue;;
  }
`
const FrillsButton = props => {
    return (
        <FBtn></FBtn>
    )
}

export default FrillsButton;