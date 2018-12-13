import React from 'react';
import { Grommet, Box, Button } from "grommet";
import Menu from "../components/nav/navbar";
import { DataTable, Meter, Text, Clock } from "grommet";

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
const DATA = [
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

class Home extends React.Component {
  render(){
    return <div>
        <Menu />
        <Box align="center">
          <Button label="CHECKIN" primary onClick={() => alert("hello, world")} />
          <b />
          <Button label="CHECKOUT" primary onClick={() => alert("hello, world")} />
          <Box align="center" justify="start" pad="large">
            <Clock type="digital" />
            Checked In: 3Hrs 33Mins
          </Box>
        </Box>
        <Box align="center" pad="large">
        <b>Summary Page</b>
          Current Timesheet: 12/06/19 - 12/07/19
          <DataTable columns={columns} data={DATA} />
        </Box>
      </div>;
  }
}

export default Home;