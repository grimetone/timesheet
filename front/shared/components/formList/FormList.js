import React from 'react';
import { DataTable, Box } from 'grommet';

/**
 * 
 * Basic shared table of information
 */
const FormList = ({ columns, data, title }) => (
<div>
    <Box align="center" pad="large">
   <b>{title}</b>
  <DataTable columns={columns} data={data} />
  </Box>
  </div>
  );

  export default FormList;