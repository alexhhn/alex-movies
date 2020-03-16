

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';

/**
 * Override `document.js` of `nextjs`.
 * @summary Customize font, server-side stylesheets 
 * @reference https://medium.com/manato/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new ServerStyleSheet();
    const materialUiSheets = new MaterialUiServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(
                  <App {...props} />
              ),
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
