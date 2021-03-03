import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getExpendables } from '../containers/Data';
import BascketStore from '../stores/bascket';
import ItemsStore from '../stores/items';

const bascketStore = new BascketStore();
const itemsStore = new ItemsStore();

const App = ({ Component, pageProps }) => {
    const getDatas = () => {
        try {
            const datum = getExpendables();
            itemsStore.setItems(datum);
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
