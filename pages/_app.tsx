import { NextPageContext } from 'next';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BASE_URL } from 'shared/constants';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { Store } from 'redux';
import { fetchMovies, setMovies } from 'redux/ducks/movieDuck';

const theme = {
  primary: 'blue',
};

axios.defaults.baseURL = BASE_URL;

interface Props extends NextPageContext {
  store: Store;
}

class MyApp extends App<Props> {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  // Fetch Movie, server side
  static async getInitialProps({ Component, ctx }: AppContext) {
    const moviesFromServer = await fetchMovies();
    ctx.store.dispatch(setMovies(moviesFromServer?.data));

    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  render() {
    const { store, Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <title>Miles Movies</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(store)(MyApp);
