import React from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import NavBar from '../containers/common/NavBar';
import SideBar from '../containers/common/SideBar';

import Greeting from '../components/info/Greeting';

import { ViewContainer, ViewContent } from '../styles/style';

const Info = () => {
    return (
        <>
            <NavBar />
            <ViewContainer>
                <Header />
                <ViewContent>
                    <SideBar sideBarItems={[{}, {}, {}, {}]} />
                    <Greeting />
                </ViewContent>
            </ViewContainer>
            <Footer />
        </>
    );
};

export default Info;