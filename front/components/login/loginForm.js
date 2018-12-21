import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextInput, Button as GrommetButton } from 'grommet';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Error from '../createProject/errorMsg';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation mutation={LOGIN_MUTATION} variables={this.state}>
        {(login, { error, loading }) => <form method="post" onSubmit={async e => {
          e.preventDefault();
          await login();
          this.setState({ email: '', password:'' });
        }}>
          <fieldset disabled={loading} aria-busy={loading}>
            <h2>Sign into your account</h2>
            <Error error={error} />
            <label htmlFor="email">
              email
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
            </label>
            <label htmlFor="password">
              password
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState} />
            </label>
            <button type="submit">Sign In!</button>
          </fieldset>
        </form>}
      </Mutation>
    );
  }
};

export default LoginForm;