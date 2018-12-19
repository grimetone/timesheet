import App, { Container } from 'next/app';
import { Grommet } from 'grommet';
import { Provider } from "react-redux";
import { ApolloProvider } from 'react-apollo';
import withRedux from "next-redux-wrapper";
import withData from '../shared/lib/withData';
import { configStore } from "../state";

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
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store, apollo } = this.props;
    return <Container>
      <Provider store={store}>
        <ApolloProvider client={apollo}>
            <Grommet theme={theme}>
              <Component {...pageProps} />
            </Grommet>
          </ApolloProvider>
        </Provider>
      </Container>;
  }
}

export default withData(withRedux(configStore)(MyApp));