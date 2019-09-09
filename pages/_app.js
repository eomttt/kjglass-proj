import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import AppLayout from '../components/AppLayout';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>광진이화학</title>
        </Head>
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    </>
);

App.getInitialProps = async (context) => {
    const { ctx, Component } = context;
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default App;
