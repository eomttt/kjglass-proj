import React from 'react';
import { Provider } from 'mobx-react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import GlassStore from '../stores/glass';

import AppLayout from '../components/AppLayout';

const glass = new GlassStore();

const App = ({ Component, pageProps }) => (
    <>
        <Provider glass={glass}>
            <Head>
                <title>광진이화학 KJGLASS</title>
            </Head>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
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
