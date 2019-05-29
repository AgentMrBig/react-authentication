import React, { Component } from 'react';
import styled from 'styled-components';
import FrillsButton from '../Buttons/FrillsButton';


const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: solid 1px lightgreen;
    width: 400px;
    margin: auto;

`

const InputItem = styled.input`
    height: 30px;
    padding: 20px;
    margin: 20px;
    font-size: 2rem;
    text-align: center;
`

const FormButton = styled.button`
    font-size: 1.5rem;
`

class LoginForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            question: ''
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <FormContainer>
                <InputItem
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange} />
                <InputItem
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                <FormButton onClick={this.handleLoginSubmit}>LOGIN</FormButton>
                <FrillsButton />
            </FormContainer>
        )
    }
}

export default LoginForm1;