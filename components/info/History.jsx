import React, { useRef } from 'react';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    padding: 30px;
`;

const Content = styled.div`
    display: flex;
    margin: 15px 0;
`;

const Year = styled.div`
    color: ${subPointColor};
    font-size: 25px;
    width: 30%;
    text-align: center;
    margin: auto;
`;

const Month = styled.div`
    width: 10%;
    margin: auto;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom: 25px;
`;

const Text = styled.div`
    width: 60%;
    margin: auto;
`;

const History = () => {
    const histories = useRef([{
        year: '2014',
        month: '04',
        text: 'SciLab 대리점',
    }, {
        year: '2013',
        month: '04',
        text: 'LKlab Korea 대리점',
    }, {
        year: '2011',
        month: '03',
        text: 'OLED 사업 관련 전문 실험실 초자 기자재 납품(L, D, H, J 회사 외)',
    }, {
        year: '2006',
        month: '09',
        text: '제조회사 <광진과학> 이역규 사장과 판매회사 <광진이화학> 엄준회 사장으로 분리영업 시작',
    }, {
        year: '2005',
        month: '09',
        text: '엘지화학 기술원 stock room Glass, 소모성 기자재 납품운영',
    }, {
        year: '2000',
        month: '01',
        text: '광진 이화학기 제작소에서 광진이화학으로 상호 변경',
    }, {
        year: '1993',
        month: '05',
        text: '엄기석 사장님 별세로 대표자 변경. 이역규, 엄준회 공동 사장',
    }, {
        year: '1984',
        month: '03',
        text: 'KIST 김박사님 마크도안. 광진 마크 상품에 부착 판매 한국화학 연구소를 시작으로 엘지화학 연구소등 대덕연구단지 납품시작',
    }, {
        year: '1979',
        month: '06',
        text: '현 엘지 화학 기술원 초자 단가계약 납품. 서울대 화학과 초자 실습 시 초자 가공에 대한 강의',
    }, {
        year: '1979',
        month: '03',
        text: '광진 이화학가 제작소로 상호변경',
    }, {
        year: '1975',
        month: '07',
        text: '광진 이화학기 제작소 설립 엄 기석 1대 사장',
    }]);

    return (
        <Container>
            <Title>{'연혁'}</Title>
            {
                histories.current.map((history) => (
                    <Content>
                        <Year>
                            {history.year}
                        </Year>
                        <Month>
                            {history.month}
                        </Month>
                        <Text>
                            {history.text}
                        </Text>
                    </Content>
                ))
            }
        </Container>
    );
};

export default History;
