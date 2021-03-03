import React from 'react';

import styled from 'styled-components';

import {
    pointColor,
    subPointColor,
} from '../../styles/style';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const Title = styled.div`
    font-size: 20px;
    color: ${subPointColor};
    margin-bottom: 10px;
`;

const Content = styled.div`
    margin-bottom: 30px;
    line-height: 1.7;
    font-size: 14px;
`;

const ContentTitle = styled.div`
    color: ${subPointColor};
    margin-top: 15px;
`;

const ContentEmphasis = styled.div`
    color: ${pointColor};
    margin-top: 10px;
`;

const Image = styled.div`
    width: 80%;
    margin-bottom: 30px;
    & img {
        width: 100%;
    }
`;

const InfoImage = styled.div`
    width: 30%;
    margin-bottom: 30px;
    & img {
        width: 100%;
    }
`;


const Equipment = () => (
    <Container>
        <Title>
            {'초자기구 특성'}
        </Title>
        <Content>
            <div>
                {`보통 실험실엣 쓰는 유리는 Borosilicate Glass ( Corning사의 Pyrex, Schott사의 Duran, 그리고 AceGlass, Kontes Glass, Kimax Glass 등) 가
                우리나라에서 많이 통용이 되고 있습니다. 실험실용으로 적합하게 개발된 유리는 선팽창계수가 낮아야 하며 내열충격성이 우수하여야 일반적인
                실험에서 요구되는 온도를 견딜 수 있습니다.`}
            </div>
            <div>
                {'또한 내마모성, 경도가 높아야 하며 다른 우리보다 분광투과율이 높고 화학적 침식에도 강해야 하는 것이 일반적인 실험실에서 요구되는 조건이므로 이상의 조건이 잘 갖추어진 것을 충족시키도록 개발된 것이 Borosilicate입니다.'}
            </div>
            <div>
                {'보통 국산유리라고 불리는 유리는 열팽창 계쑤가 9.3이며 연화점이 700C입니다. (연화점 : 본래의 물성을 잃고 연화되는 온도)'}
            </div>
            <div>
                {'실험실에서 많이 쓰는 Borosilicate는 열팽창 계수가 0.8과 1,500C로 연화점이 월등히 높은 것을 알 수 있습니다.'}
            </div>
            <div>
                {'참고로 Borosilicate는 600C 이상이 되면 Soft해 지기 시작됩니다. 가공 후 전기로에서 통상 595C까지 열처리 후 제품이 출하됩니다.'}
            </div>
        </Content>
        <Title>
            {'초자기구 표준 규격'}
        </Title>
        <Content>
            <div>
                {`국내에서는 실험실용으로 Borosilicate Glass가 생산이 되지않아 전량 수입에 의존하고 있습니다. 수입되는 규격은 Corning사의 Lab사이즈
             (세계적으로 통일)로 수입되고 있습니다. 독일 Glass는 두께가 여러가지로 Pilot설비까지도 Glass로 작업이 가능하도록 생산 수입되고 있습니다.
             Joint와 Stop cock에 대한 규격은 다음과 같습니다.`}
            </div>
            <div>
                {'미국 NBS(National Bureau of Standard)에서 정한 표준이 있습니다.'}
            </div>
            <div>
                {'먼저 Joint는 국제 표준에 의해 전세계적으로 만들어진 제품은 Js,Ts라 표시하며 Js는 Spherical를 의미하며 Ts는 Standerd Taper를 의미합니다.'}
            </div>
            <div>
                {'Taper ground joint 규격은 국내에서 통상 Full, Medium 규격이 통용됩니다.'}
            </div>
            <div>
                {'Spherical ground joint는 쉽게 구부러지는 특성이 있어 흔틀리는 부분을 연결할때 많이 사용합니다.'}
            </div>
        </Content>
        <Image>
            <img alt={'table'} src={'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/clean/clean_1.png'} />
        </Image>
        <Content>
            <div>
                {'- 그림에서 A부분은 앞 숫자입니다. 앞 숫자가 같으면 B 부분에 상관없이 같은 규격으로 보아도 됩니다.'}
            </div>
            <div>
                {'- Glass stop cock의 규격은 Cock plug 구멍으로 규격을 나타냅니다'}
            </div>
        </Content>
        <InfoImage>
            <img alt={'info'} src={'https://kjglass-images.s3.ap-northeast-2.amazonaws.com/clean/clean_2.png'} />
        </InfoImage>
        <Title>
            {'실험실 초자기구 세척방법'}
        </Title>
        <Content>
            <div>
                {'통상적으로 유리기구 세척은 세제를 사용하여 세척하거나 초음파 세척기를 사용하기도 합니다.'}
            </div>
            <div>
                {'그러나 세척이 용이하지 않을 시 아래 방법을 이용합니다.'}
            </div>
            <ContentTitle>
                {'ⓐ Chromic Acid Solution 제조법과 이용방법'}
            </ContentTitle>
            <div>
                {'Na2Cr207, 2H2O, 92gr을 물 460ml에 녹입니다. 이 용액에 진한황산 800ml를 천천히 넣으면서 잘 교반합니다.'}
            </div>
            <div>
                {'이 용액에서 잘 세척되지 않을 경우는 1L 진한황산에 Na2Cr207, 2H2O 포화 수용액을 35ml 쯤 넣어 사용합니다. 대부분의 오염물질은 이 용액에 하루정도 담그면 깨끗하게 제거됩니다.'}
            </div>
            <ContentTitle>
                {'ⓑ Sodium(Potassium) Alkoxide Solution 제조법과 이용방법'}
            </ContentTitle>
            <div>
                {'이 용액은 매우 세정력이 강하므로 하루이상 담가두면 초자기구 표면에 영향을 줍니다. 120gr 정도의 NaOH 혹은 KOH를 120gr의 물에 녹인 후 약 1L의 ethnol을 넣어 잘 저어줍니다. Ethanol대신 1L정도의 iso-propannol을 사용하면 세정력은 떨어지나 초자기구의 손상은 적습니다.'}
            </div>
            <ContentEmphasis>
                {'초자기구를 수리할 때 꼭 세정을 하여 주십시오, 이유는 다음과 같습니다.'}
            </ContentEmphasis>
            <div>
                {'초자기구를 녹일 때 기구에 묻어있는 화학물이 연소되면서 화재나 유독가스에 가공하는 사람이 노출됩니다. 유리끼리 붙는 면에서 깨끗이 붙일 수가 없으므로 고진공 시 니크가 생깁니다. 가공 시 사람이 입에다 대고 불어야 하므로 남아있는 합성물이 있을 시 수리가공의 어려움으로 작업이 안될 수 있습니다.'}
            </div>
        </Content>
    </Container>
);

export default Equipment;
