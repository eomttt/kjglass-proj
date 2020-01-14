import React, { useEffect } from 'react';
import { Provider } from 'mobx-react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import * as firebase from 'firebase/app';
import 'firebase/database';


import BascketStore from '../stores/bascket';
import ItemsStore from '../stores/items';

import AppLayout from '../components/AppLayout';

import FirebaseConfig from '../firebase.config';

const bascketStore = new BascketStore();
const itemsStore = new ItemsStore();

const App = ({ Component, pageProps }) => {
    const getDatas = async () => {
        firebase.initializeApp(FirebaseConfig);
        const dataBase = firebase.database();
        const expendableItems = await dataBase.ref('/expendables').once('value');
        const glssItems = await dataBase.ref('/glass').once('value');

        itemsStore.setItems(glssItems.val(), expendableItems.val());
    };

    useEffect(() => {
        bascketStore.initBasket();
        getDatas();
    }, []);

    return (
        <>
            <Provider bascketStore={bascketStore} itemsStore={itemsStore}>
                <Head>
                    <title>광진이화학 KJGLASS</title>
                </Head>
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </Provider>
        </>
    );
};

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
