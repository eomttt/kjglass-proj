import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import { ServerStyleSheet } from 'styled-components';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
class MyDocument extends Document {
    static getInitialProps(context) {
        const sheet = new ServerStyleSheet();
        const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10268c3a3e909de2ed288407e0902486"></script>
                </Head>
                <body style={{ margin: 0 }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
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
