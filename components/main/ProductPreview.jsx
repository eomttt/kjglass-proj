import React from 'react';
import styled from 'styled-components';

const Top = styled.div`

`;

const TopButton = styled.div`

`;

const Bottom = styled.div`

`;

const ProductPreview = () => {
    return (
        <>
            <Top>
                <div>
                    {'광진이화학의 최신 기자재를 소개합니다.'}
                </div>
                <TopButton>
                    {'카타로그 다운로드'}
                </TopButton>
            </Top>
            <Bottom>

            </Bottom>
        </>
    );
};

export default ProductPreview;