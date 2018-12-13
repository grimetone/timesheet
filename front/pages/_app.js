import App, { Container } from 'next/app';
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

/**
 * Applications 'alternative wrapper component
 */
class MyApp extends App {
  render() {
    const { Component } = this.props;

    return <Container>
        <Grommet theme={theme}>
          <Component />
        </Grommet>
      </Container>;
  }
}

export default MyApp;