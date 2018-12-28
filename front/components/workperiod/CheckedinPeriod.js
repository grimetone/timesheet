import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const url = require('url');
import { formatCheckin, timeComparison } from '../../shared/lib/dateUtils';

const CHECKINTIME_QUERY = gql`
  query CHECKINTIME_QUERY {
    checkinTime {
      id
      from
      to
    }
  }
`;

export default (props) => {
  return <Query query={CHECKINTIME_QUERY} >
      {({ error, loading, data }) => {
        if (!(data.checkinTime) || data.checkinTime.length<1) return <p>please check-in..</p>;
      const time = formatCheckin(data.checkinTime);
      const timeCompare = timeComparison(data.checkinTime);
        return <div>
          <span><b>Checked-in: {timeCompare}</b>; [{time}] </span>
          </div>;
      }}
    </Query>;
}