import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    margin: 10px;
    width: 100%;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const Content = styled.div`
    margin: 15px;
`;

const List = styled.div`
    color: ${subPointColor};
    border-bottom: 1px solid ${subPointColor};
    cursor: pointer;
    display: flex;
`;


const Writer = styled.div`
    color: black;
    margin-right: 10px;
    margin-left: auto;
`;

const Category = styled.div`
    margin: 15px 15px 30px;
    ${List} {
        color: black;
        cursor: initial;
    }
`;

const Number = styled.div`
    margin-left: 10px;
`;

const NoticeTitle = styled.div`
    text-align: center;
    margin: auto;
`;

const Notices = ({ notices, clickNotice }) => (
    <Container>
        <Title>
            {'공지사항'}
        </Title>
        <Category>
            <List>
                <Number>
                    {'번호'}
                </Number>
                <NoticeTitle>
                    {'제목'}
                </NoticeTitle>
                <Writer>
                    {'작성자'}
                </Writer>
            </List>
        </Category>
        <Content>
            {
                notices.map((notice) => (
                    <List key={notice.id} onClick={() => clickNotice(notice.id)}>
                        <Number>
                            {notice.id}
                        </Number>
                        <NoticeTitle>
                            {notice.title}
                        </NoticeTitle>
                        <Writer>
                            {'광진이화학'}
                        </Writer>
                    </List>
                ))
            }
        </Content>
    </Container>
);

Notices.propTypes = {
    notices: PropTypes.array.isRequired,
    clickNotice: PropTypes.func.isRequired,
};

export default Notices;
