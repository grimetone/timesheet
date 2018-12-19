import App, { Container } from 'next/app';
import { Grommet } from 'grommet';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
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
    const { Component, pageProps , store} = this.props;

    return <Container>
      <Provider store={store}>
        <Grommet theme={theme}>
          <Component {...pageProps} />
        </Grommet>
        </Provider>
     </Container>;
  }
}

export default withRedux(configStore)(MyApp);