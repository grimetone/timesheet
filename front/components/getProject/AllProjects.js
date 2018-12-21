import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    projects {
      id
      name
      active
      created
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
    return (
        <Query query={ALL_PROJECTS_QUERY} >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.projects.map(project => (
                  <p>
                  {project.id}, {project.name} {project.created} {project.active} 
                    <Link
                      href={{
                        pathname: '/project',
                        query: { id: project.id },
                      }}
                    >Click</Link>
                   </p>
                  ))}
                  </div>
            );
          }}
        </Query>
    );
};

export { ALL_PROJECTS_QUERY };