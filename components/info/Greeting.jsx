import React from 'react';

import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom: 25px;
`;

const SubTitle = styled.div`
    font-size: 23px;
    color: ${subPointColor};
    margin-bottom: 30px;
`;

const Text = styled.div`
    font-size: 12px;
    padding-right: 20%;
    & div {
        font-size: 14px;
        margin-top: 50px;
        font-weight: bolder;
    }
`;

const Greeting = () => (
    <Container>
        <Title>
            {'인사말'}
        </Title>
        <SubTitle>
            {'Customer Satisfaction'}
            <br></br>
            {'고객만족을 위해 최선을 다하겠습니다.'}
        </SubTitle>
        <Text>
            {`성실히 최고의 제품을 소비자에게 직접 전달하고자 노력하며 외산 실험 기자재보다 국내실정에 맞는 좋은 제품을 생한하기 위하여 
                광진이 화학 전 직원이 한 마음으로 가공 기술 개발에 전력 투구하여 GLASS 가공의 최고 위치에 서고자 합니다`}
            <br></br>
            <br></br>
            {`앞으로 나서기 보다는 뒤에서 뒷받침으로 만족하며 우리나라 화학 발전에 조긍미아나 밑거름이 되어서
                화학이 있는 한 광진이 화확이 있어 빠른 발전이 되었다는 소리를 듣고자 전직원은 노력하고 있습니다.`}
            <div>
                {'대표이사 엄준회'}
            </div>
        </Text>
    </Container>
);

export default Greeting;
