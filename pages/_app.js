import React, { useEffect } from 'react';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';

import * as firebase from 'firebase/app';
import BascketStore from '../stores/bascket';
import ItemsStore from '../stores/items';

import 'firebase/database';

import FirebaseConfig from '../firebase.config';

import getData from '../containers/Data';

const bascketStore = new BascketStore();
const itemsStore = new ItemsStore();

const App = ({ Component, pageProps }) => {
    const getDatas = async () => {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(FirebaseConfig);
            }
            const dataBase = firebase.database();
            const { expendables } = await getData(dataBase);

            itemsStore.setItems(expendables);
        } catch (error) {
            console.log('Get data error', error);
        }
    };

    useEffect(() => {
        bascketStore.initBasket();
        getDatas();
    }, []);

    return (
        <>
            <Provider bascketStore={bascketStore} itemsStore={itemsStore}>
                <Component {...pageProps} />
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
