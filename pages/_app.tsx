import { NextPageContext } from 'next';
import App from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BASE_URL } from 'shared/constants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

interface AppContext extends NextPageContext {
  store: any;
}

class MyApp extends App<AppContext> {
  render() {
    const { store, Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <title>Miles Movies</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(store)(MyApp);
