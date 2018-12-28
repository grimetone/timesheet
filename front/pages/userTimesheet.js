import React from 'react';
import { Box, Button, Clock, Text } from 'grommet';

import MyTimesheet from '../components/timesheet/UserTimesheet';
/**
 * Projects component  for displaying a users projects
 */
class UserTimesheet extends React.Component {
  render() {
    return (
      <div>
        <Box align="center">
        <h2> Current Timesheet </h2>
        <MyTimesheet />
        </Box>
      </div>
    );
  }
}

export default UserTimesheet;
