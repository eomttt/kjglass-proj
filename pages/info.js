import React from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import NavBar from '../containers/common/NavBar';

import { ViewContainer } from '../styles/style';

const Info = () => {
    return (
        <>
            <NavBar />
            <ViewContainer>
                <Header />
            </ViewContainer>
            <Footer />
        </>
    );
};

export default Info;