import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { DataTable, Box, Text } from 'grommet';

import { getTotalHours, getTotalUnassignedHours } from '../../shared/lib/workperiodUtils';
import { formatWorkperiod } from '../../shared/lib/dateUtils';
const RECENT_WORKPERIODS_MUTATION = gql`
  query RECENT_WORKPERIODS_MUTATION {
    recentWorkperiods {
      id
      from
      to
    }
  }
`;


class RecentWorkperiodList extends Component {
  state = {
    totalHrs: 0,
    unassignedHrs: 0,
  };
  getColumns = (totalHrs, unassignedHrs) => {
  return [{ property: 'from', header: <Text>
          Start Time
        </Text>, footer: `Total Hrs: ${totalHrs}` }, { property: 'to', header: 'End time' }, { property: 'project', header: <Text>
          Project
        </Text>, footer: `Unassigned Hrs: ${unassignedHrs}`
    }, { property: 'link', header: 'Link' }];
}

  render() {
    return (
      <Query query={RECENT_WORKPERIODS_MUTATION}>
        {({ data, error, loading }) => {
          const totalhours = getTotalHours(data.recentWorkperiods);
          const unassignedhours = getTotalUnassignedHours(data.recentWorkperiods);
          const workPeriods = formatWorkperiod(data.recentWorkperiods);
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return <div>
            <DataTable columns={this.getColumns(totalhours, unassignedhours)} data={workPeriods} />
            </div>;
        }}
      </Query>
    );
  }
};

export default RecentWorkperiodList;