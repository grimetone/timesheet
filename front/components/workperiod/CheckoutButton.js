import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Box, Button, Clock, Text } from 'grommet';
import { Subtract } from 'grommet-icons';

const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION {
    checkout {
      id
    }
  }
`;

class CheckoutButton extends Component {
  render() {
    return <Mutation mutation={CHECKOUT_MUTATION}>
      {(checkout, { error }) => <Button hoverIndicator="light-1" onClick={() => {
              checkout().catch(err => {
                alert(err.message);
              });
            }}>
            <Box pad="small" direction="row" align="center" gap="small">
              <Subtract />
              <Text>Checkout</Text>
            </Box>
          </Button>}
      </Mutation>;
  }
}

export default CheckoutButton;
