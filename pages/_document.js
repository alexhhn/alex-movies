// https://medium.com/manato/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
    }
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            // https://spectrum.chat/next-js/general/ssr-global-styles-with-styled-components-v4~605fa241-b194-4c6b-b071-1816fb96074b
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
