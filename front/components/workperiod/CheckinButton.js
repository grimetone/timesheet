import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Box, Button, Clock, Text } from 'grommet';
import { Add } from "grommet-icons";

const CHECKIN_MUTATION = gql`
  mutation CHECKIN_MUTATION {
    checkin {
      id
      from
    }
  }
`;

class CheckinButton extends Component {
  render() {
    return <Mutation mutation={CHECKIN_MUTATION}>
      {(checkin, { error }) => <Button hoverIndicator="light-1" onClick={() => {
              checkin().catch(err => {
                alert(err.message);
              });
            }} >
        <Box pad="small" direction="row" align="center" gap="small">
          <Add />
          <Text>Checkin</Text>
        </Box>
      </Button>
            }
      </Mutation>;
  }
}

export default CheckinButton;
