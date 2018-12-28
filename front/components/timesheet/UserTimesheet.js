import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const url = require('url');
import { DataTable, Box, Text } from 'grommet';

import {
  getTotalHours,
  getTotalUnassignedHours,
} from '../../shared/lib/workperiodUtils';
import { formatWorkperiod, formatCheckin, formatCheckout } from '../../shared/lib/dateUtils';

const USER_TIMESHEET_QUERY = gql`
  query USER_TIMESHEET_QUERY {
    userTimesheet {
      id
      confirmedBy {
        id
      }
      from
      to
      workPeriods {
        id
        from
        to
        confirmedBy {
          id
        }
      }
    }
  }
`;

class UserTimesheet extends Component {
  state = {
    totalHrs: 0,
    unassignedHrs: 0,
  };
  getColumns = (totalHrs, unassignedHrs) => {
    return [{
      property: 'from', header: <Text>
        Start Time
        </Text>, footer: `Total Hrs: ${totalHrs}`
    }, { property: 'to', header: 'End time' }, {
      property: 'confirmedBy', header: <Text>
        Confirmed-By
        </Text>, footer: `Unassigned Hrs: ${unassignedHrs}`
    }, { property: 'link', header: 'Link' }];
  }
  render() {
    return <Query query={USER_TIMESHEET_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        if (!data.userTimesheet || data.userTimesheet[0].workPeriods.length < 1) return <p>
              Empty.
            </p>;
        const totalhours = getTotalHours(data.userTimesheet[0].workPeriods);
        const unassignedhours = getTotalUnassignedHours(data.userTimesheet[0].workPeriods);
        const workPeriods = formatWorkperiod(data.userTimesheet[0].workPeriods);
        const formatedFrom = formatCheckin(data.userTimesheet);
        const formatedTo = formatCheckout(data.userTimesheet);

        return <div>
          <h3>From: </h3>{formatedFrom} <h3>To: </h3>{formatedTo}
          <DataTable columns={this.getColumns(totalhours, unassignedhours)} data={workPeriods} />
        </div>;
      }}
    </Query>;
}
}

export default UserTimesheet;