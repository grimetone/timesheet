import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../createProject/errorMsg';
import styled from 'styled-components';;
import PropTypes from 'prop-types';
const url = require('url');
import Router from 'next/router';

const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    project(id: $id) {
      id
      name
      active
      users {
        id
        name
      }
      expenses {
        id
      }
      created
    }
  }
`;

export default (props) => {
    return <Query query={SINGLE_PROJECT_QUERY} variables={{ id: props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.project) return <p>No Project Found for {props.id}</p>;
          const project = data.project;
          return (
            <div>
              <span>{project.name} </span>
              </div>
          );
        }}
      </Query>;
}

export { SINGLE_PROJECT_QUERY };