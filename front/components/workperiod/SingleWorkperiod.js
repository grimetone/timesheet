import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../createProject/errorMsg';
import styled from 'styled-components';;
import PropTypes from 'prop-types';
const url = require('url');
import Router from 'next/router';

const SINGLE_WORKPERIOD_QUERY = gql`
  query SINGLE_WORKPERIOD_QUERY($id: ID!) {
    workPeriod(id: $id) {
      id
      from
      to
    }
  }
`;

export default (props) => {
  return <Query query={SINGLE_WORKPERIOD_QUERY} variables={{ id: props.id }}>
      {({ error, loading, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        if (!data.workPeriod) return <p>No Workperiod Found for {props.id}</p>;
        const workperiod = data.workPeriod;
        return <div>
            <span>{workperiod.id} </span>
          </div>;
      }}
    </Query>;
}