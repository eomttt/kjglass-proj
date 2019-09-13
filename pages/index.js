import React from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import NavBar from '../containers/common/NavBar';
import CustomerCenter from '../containers/main/CustomerCenter';
import ProductPreview from '../containers/main/ProductPreview';
import Notice from '../containers/main/Notice';
import SearchProduct from '../containers/main/SearchProduct';

import { ViewContainer } from '../styles/style';
import { MainItems, MainItem } from '../styles/main';

const Home = () => {
    return (
        <>
            <NavBar />
            <ViewContainer>
                <Header />
                <ProductPreview />
                <MainItems>
                    <MainItem>
                        <Notice />
                    </MainItem>
                    <MainItem>
                        <SearchProduct />
                    </MainItem>
                    <MainItem>
                        <CustomerCenter />
                    </MainItem>
                </MainItems>
            </ViewContainer>
            <Footer />
        </>
    );
};

export default Home;
