import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../createProject/errorMsg';
import styled from 'styled-components';;
import PropTypes from 'prop-types';
const url = require('url');
import Router from 'next/router';

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    user(id: $id) {
      id
      name
      employeeNo
      hrChargeKr
      email
    }
  }
`;

export default (props) => {
  return <Query query={SINGLE_USER_QUERY} variables={{ id: props.id }}>
      {({ error, loading, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        if (!data.user) return <p>No User Found for {props.id}</p>;
        const user = data.user;
        return <div>
            <span>{user.name} </span>
          </div>;
      }}
    </Query>;
}

export { SINGLE_USER_QUERY };