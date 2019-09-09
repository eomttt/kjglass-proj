import React from 'react';

import NavBar from '../components/common/NavBar';
import Header from '../components/common/Header';

import { ViewContainer } from '../styles/style';

const Home = () => {
    return (
        <>
            <NavBar />
            <ViewContainer>
                <Header />
            </ViewContainer>
        </>
    );
};

export default Home;
