import React, { Component } from 'react';
import { TextInput, Button as GrommetButton } from 'grommet';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Error from '../createProject/errorMsg';

const USER_CREATE_MUTATION = gql`
  mutation USER_CREATE_MUTATION(
    $email: String!
    $password: String!
    $name: String!
    $hrChargeKr: Int
  ) {
    createUser(
      email: $email
      password: $password
      name: $name
      hrChargeKr: $hrChargeKr
    ) {
      id
      email
      name
    }
  }
`;

class CreateUser extends Component {
  state = {
    email: "",
    password: "",
    name: '',
    hrCharge: ''
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <Mutation mutation={USER_CREATE_MUTATION} variables={this.state}>
        {(create, { error, loading }) => <form method="post" onSubmit={async e => {
              e.preventDefault();
              await create();
              this.setState({
                name: '',
                email: '',
                password: '',
                hrChargeKr: '',
              });
            }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Create User</h2>
              <Error error={error} />
              <label htmlFor="email">
                Email
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState} />
              </label>
              <label htmlFor="name">
                Name
                <input type="name" name="name" placeholder="name" value={this.state.name} onChange={this.saveToState} />
              </label>
              <label htmlFor="hrCharge">
                Hourly Wage
                <input type="number" name="hrChargeKr" placeholder="hrChargeKr" value={this.state.hrChargeKr} onChange={this.saveToState} />
              </label>
              <button type="submit">Sign In!</button>
            </fieldset>
          </form>}
      </Mutation>;
  }
}

// render() {
//   return(
//   <Mutation mutation={PROJECT_CREATE_MUTATION} variables={this.state}>
//       {(signup, { error, loading }) => (
//         < ProjectForm onChange={this.saveToState} onSubmit={this.onSubmit} />
//       )};
//     </Mutation>
//   )};
// }

export default CreateUser;