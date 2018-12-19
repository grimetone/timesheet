import React from 'react';
import { Box, Button, Clock, Text } from "grommet";
import { FormList, Menu } from "../shared/components";

const columns = [
  {
    property: "start",
    header: <Text>Start Time</Text>,
    footer: "Total Hrs:"
  },
  {
    property: "end",
    header: "End"
  },
  {
    property: "project",
    header: <Text>Project</Text>,
    footer: "Unassigned Hrs:"
  }
];

const DATA  = [
  {
    start: "2018-06-10",
    end: "2018-06-10",
    project: "Project 22"
  },
  {
    start: "2018-06-10",
    end: "2018-06-10",
    project: "Project 1"
  },
  {
    start: "2018-06-10",
    end: "2018-06-10",
    project: "Project 22"
  },
  {
    start: "2018-06-10",
    end: "2018-06-10",
    project: "Project 22"
  },
  {
    start: "2018-06-10",
    end: "2018-06-10",
    project: "Project 22"
  },
  {
    start: "2018-06-10",
    end: "2018-06-10",
    project: "Project 22"
  },
  {
    start: "2018-06-10",
    end: "2018-06-10",
    project: "Project 22"
  }
];
const menuItems = [
  { label: "My Projectsz", onClick: () => { } },
  { label: "Abort", onClick: () => { } },
];

const title = 'Current Timesheet: 12 / 06 / 19 - 12 / 07 / 19';

class Home extends React.Component {
  render(){
    return <div>
      <Menu items={menuItems} />
        <Box align="center">
          <Button label="CHECKIN" primary onClick={() => alert("hello, world")} />
          <Button label="CHECKOUT" primary onClick={() => alert("hello, world")} />
          <Box align="center" justify="start" pad="large">
            <Clock type="digital" />
            Checked In: 3Hrs 33Mins
          </Box>
        </Box>
          <FormList columns={columns} data={DATA} title={title} />
      </div>;
  }
}

export default Home;