import Document, { Head, Html, Main, NextScript } from "next/document";
import PropTypes from "prop-types";
import { createGlobalStyle, ServerStyleSheet } from "styled-components";

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
	}
`;

class MyDocument extends Document {
  static getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10268c3a3e909de2ed288407e0902486"
          ></script>
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.propTypes = {
  styleTags: PropTypes.array.isRequired,
};

export default MyDocument;

/*
기본 _document.js 모습일 것 같다
            <html>
                <Head />>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
 */
