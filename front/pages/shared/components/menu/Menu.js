import React from "react";
import { Menu as Nav, Box } from "grommet";

/**
 *
 * Basic shared menu dropdown component
 */
const Menu = ({ items }) => {
  return(
  <div>
      <Box align="center" pad="large">
        <Nav
          label="Actions"
            items={items}
        />
      </Box>
  </div>
)};

export default Menu;