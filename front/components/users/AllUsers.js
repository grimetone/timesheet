import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default () => {
  return <Query query={ALL_USERS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return <div>
            {data.users.map(user => <p>
                {user.id}, {user.name}, {user.email}
                <Link
                  href={{
                    pathname: '/user',
                    query: { id: user.id },
                  }}
                >
                  Click
                </Link>
              </p>)}
          </div>;
      }}
    </Query>;
};

export { ALL_USERS_QUERY };