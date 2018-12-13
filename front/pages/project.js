import React from 'react';
import {
  Box,
  Heading,
  Grommet,
  FormField,
  Tab,
  Tabs,
  Text,
  TextInput,
  DataTable
} from "grommet";

const colunms = [
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

/**
 * Project component  for displaying a single project
 */
class Project extends React.Component {
  render() {
    return(
      <div>
        <Box fill>
        <Tabs flex>
          <Tab title="Users">
            <Box
              fill
              overflow="auto"
              pad="xlarge"
              align="center"
            >
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
              <Heading>hello!</Heading>
            </Box>
          </Tab>
          <Tab title="Expenses">
            <Box margin="small" pad="large" align="center" >
                <Box align="center" pad="large">
                  <b>Summary Page</b>
                  Current Timesheet: 12/06/19 - 12/07/19
          <DataTable columns={columns} data={DATA} />
                </Box>
            </Box>
          </Tab>
        </Tabs>
      </Box></div>
    );
  }
}

export default Project;