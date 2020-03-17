import { NextPageContext } from 'next';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BASE_URL } from 'shared/constants';
import axios from 'axios';
import { Store } from 'redux';
import { GlobalStyle } from 'shared/globalStyle';
import AppThemeProvider from 'shared/themeProvider';
// TODO: Get theme with redux
axios.defaults.baseURL = BASE_URL;

interface Props extends NextPageContext {
  store: Store;
  setTheme: any;
}

class MyApp extends App<Props> {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  render() {
    const { store, Component, pageProps, setTheme } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <title>Miles Movies</title>
        </Head>
        <AppThemeProvider>
          <>
            <Component {...pageProps} setTheme={setTheme} />
            <GlobalStyle />
          </>
        </AppThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(store)(MyApp);
