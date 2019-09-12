import React from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import NavBar from '../containers/common/NavBar';
import CustomerCenter from '../containers/main/CustomerCenter';
import ProductPreview from '../containers/main/ProductPreview';
import Notice from '../containers/main/Notice';
import ProductSearch from '../containers/main/ProductSearch';

import { ViewContainer, ViewContent } from '../styles/style';

const Home = () => {
    return (
        <>
            <NavBar />
            <ViewContainer>
                <Header />
                <ProductPreview />
                <ViewContent>
                    <Notice />
                    <ProductSearch />
                    <CustomerCenter />
                </ViewContent>
                <Footer />
            </ViewContainer>
        </>
    );
};

export default Home;
