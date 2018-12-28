import React from 'react';
import { Box, Button, Clock, Text } from "grommet";
import { FormList, Menu } from "../shared/components";

import CheckinButton from '../components/workperiod/CheckinButton';
import CheckoutButton from '../components/workperiod/CheckoutButton';
import CheckedinPeriod from '../components/workperiod/CheckedinPeriod';
import WorkList from '../components/workperiod/RecentWorkperiodList';

const menuItems = [
  { label: "My Projects", onClick: () => { } },
  { label: "My Timesheet", onClick: () => { } },
];
class Home extends React.Component {
  render(){
    return <div>
      <Menu label="Menu" items={menuItems} />
        <Box align="center">
          <CheckinButton /> <CheckedinPeriod />
          <CheckoutButton />
          <Box align="center" justify="start" pad="large">
            <Clock type="digital" />
            <WorkList />
          </Box>
        </Box>
      </div>;
  }
}

export default Home;