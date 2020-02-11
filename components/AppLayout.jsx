import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import CiLogo from '../lib/images/ci.png';

const DEFAULT_META = {
    TITLE: '광진이화학',
    DESCRIPTION: '광진이화학 실험기자재 판매처',
    KEYWORDS: '화학, 광진이화학, 광진이, lklab, 엄준회, 박경해, 실험기자재, kjglass',
    IMAGE: CiLogo,
};

const AppLayout = ({ children, metaInfo }) => {
    const { title, description, image } = metaInfo;

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#ffffff" />
                <meta charSet="utf-8" />
                <meta title={title || DEFAULT_META.TITLE} />
                <meta name="description" content={description || DEFAULT_META.TITLE} />
                <meta name="keywords" content={title || DEFAULT_META.KEYWORDS} />
                <meta name="author" content="KJ GLASS" />
                <meta property="og:site_name" content={title || DEFAULT_META.TITLE} />
                <meta property="og:title" content={title || DEFAULT_META.TITLE} />
                <meta property="og:description" content={description || DEFAULT_META.DESCRIPTION} />
                <meta property="og:image" content={image || DEFAULT_META.IMAGE} />
                <meta property="og:locale" content="ko" />
                <meta property="og:type" content="website" />
            </Head>
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    metaInfo: PropTypes.object,
};

AppLayout.defaultProps = {
    metaInfo: DEFAULT_META,
}

export default AppLayout;
