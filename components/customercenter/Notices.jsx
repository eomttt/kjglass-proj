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

const List = styled.div`
    color: ${subPointColor};
    border-bottom: 1px solid ${subPointColor};
    cursor: pointer;
    display: flex;
`;

const Number = styled.div`
    width: 11%;
    border-right: 1px solid black;
    border-left: 1px solid black;
    text-align: center; 
`;

const NoticeTitle = styled.div`
    text-align: center;
    width: 70%;
    border-right: 1px solid black; 
`;

const Writer = styled.div`
    width: 19%;
    color: black;
    text-align: center;
    border-right: 1px solid black;
`;

const Content = styled.div`
    ${Number} {
       padding: 10px 0; 
    }
    ${NoticeTitle} {
        padding: 10px 0;
    }
    ${Writer} {
        padding: 10px 0;
    }
`;

const Category = styled.div`
    ${List} {
        color: black;
        cursor: initial;
        border-top: 1px solid black;
    }
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
