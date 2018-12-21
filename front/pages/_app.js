import App, { Container } from 'next/app';
import { Grommet } from 'grommet';
import { ApolloProvider } from 'react-apollo';
import withData from '../shared/lib/withData';

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
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Grommet theme={theme}>
            <Component {...pageProps} />
          </Grommet>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);