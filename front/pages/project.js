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
import SingleProject from '../components/getProject/SingleProject';

/**
 * Project component  for displaying a single project
 */
const Project = (props) => {
    return <div>
        <SingleProject id={props.query.id} />
      </div>;
}

export default Project;