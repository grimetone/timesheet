import React, { Component } from 'react';
import { TextInput, Button as GrommetButton } from 'grommet';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Error from './errorMsg';
import ProjectForm from './ProjectForm';

const PROJECT_CREATE_MUTATION = gql`
  mutation PROJECT_CREATE_MUTATION($name: String!, $active: Boolean!) {
    createProject(name: $name, active: $active) {
      name
      active
    }
  }
`;

class CreateProject extends Component {
  state = {
    name: '',
    active: 'false',
  }; 
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
    <Mutation mutation={PROJECT_CREATE_MUTATION} variables={this.state}>
        {(create, { error, loading }) => <form method="post" onSubmit={async e => {
              e.preventDefault();
              await create();
              this.setState({ name: '' });
            }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Create Project</h2>
              <Error error={error} />
              <label htmlFor="name">
                Name
                <input type="name" name="name" placeholder="name" value={this.state.name} onChange={this.saveToState} />
              </label>
              <button type="submit">Sign In!</button>
            </fieldset>
          </form>}
      </Mutation>
    );
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

export default CreateProject;