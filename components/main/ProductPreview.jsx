import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Top = styled.div`

`;

const TopButton = styled.div`

`;

const Bottom = styled.div`

`;

const ProductPreview = ({ clickDownload }) => {
    return (
        <>
            <Top>
                <div>
                    {'광진이화학의 최신 기자재를 소개합니다.'}
                </div>
                <TopButton onClick={clickDownload}>
                    {'카타로그 다운로드'}
                </TopButton>
            </Top>
            <Bottom>

            </Bottom>
        </>
    );
};

ProductPreview.propTypes = {
    clickDownload: PropTypes.func.isRequired,
};

export default ProductPreview;
