import React from 'react';
import styled from 'styled-components';
import CiLogo from '../../lib/images/ci.png';
import { isMobile, pointColor } from '../../styles/style';

const Container = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
  & img {
    width: 700px;
  }

  ${isMobile} {
    padding: 0;
  }
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 25px;
  text-align: initial;
`;

const Text = styled.div`
  border-top: 1px solid black;
  text-align: center;
  font-size: 14px;
  padding: 50px 0;
  & span {
    color: ${pointColor};
  }
`;

const Ci = () => (
  <Container>
    <Title>{'CI'}</Title>
    <img src={CiLogo} alt={'logo'} />
    <Text>
      {
        '전체적인 원과 글씨는 Pyrex Glass tubing을 뜻하고 원안의 두손은 Glass의 가공을 의미합니다.'
      }
      <br></br>
      {'특히, '}
      <span>{'적색'}</span>
      {
        '은 가공시의 불꽃을 표현한 것으로서 정열의 상징인 적색은 끊임없는 전진과 앞으로의 적극적인 도약,'
      }
      <br></br>
      {
        '그리고 원안의 하나됨으로써 과학기술 발전에 작은 보탬이 되고자 하는 뜻을 담고 있습니다.'
      }
    </Text>
  </Container>
);

export default Ci;
