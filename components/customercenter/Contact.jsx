import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { subPointColor } from '../../styles/style';

const Container = styled.div`
    margin: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    padding: 10px 30px;
    border: 1px solid black;
    margin-bottom: 15px;
`;

const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;

    & div {
        margin-bottom: 5px;
    }

    & input {
        width: 100%;
        height: 25px;
    }

    & textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
    }
`;

const TitleRight = styled.div``;

const InputRight = styled.input``;

const InputContent = styled.div`
    width: 50%;
    display: inline-block;

    & div {
        margin-bottom: 5px;
    }

    & input {
        width: 95%;
        height: 25px;
    }

    & ${InputRight} {
        margin-left: 5%;
    }

    & ${TitleRight} {
        margin-left: 5%; 
    }
`;

const Button = styled.div`
    width: 20%;
    text-align: center;
    padding: 10px;
    color: white;
    background-color: ${subPointColor};
    cursor: pointer;
    margin: auto;
`;

const KakaoButton = styled.div`
    width: 20%;
    text-align: center;
    padding: 10px;
    color: white;
    background-color: #ffdf00;
    color: #222;
    cursor: pointer;
    margin: 10px auto;
`;

const Contact = ({ submitContact }) => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [team, setTeam] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [faxNum, setFaxNum] = useState('');
    const [content, setContent] = useState('');

    const submit = useCallback(() => {
        submitContact({
            title,
            company,
            team,
            name,
            email,
            number,
            faxNum,
            content,
        });
    }, [title, company, name, email, number, faxNum, content]);

    const openKakao = () => {
        window.open('https://open.kakao.com/o/skpWswjb');
    };

    return (
        <Container>
            <Content>
                <InputContainer>
                    <div>
                        {'제목'}
                    </div>
                    <input value={title} onChange={(e) => { setTitle(e.target.value); }} />
                </InputContainer>
                <InputContainer>
                    <InputContent>
                        <div>
                            {'회사명'}
                        </div>
                        <input value={company} onChange={(e) => { setCompany(e.target.value); }} />
                    </InputContent>
                    <InputContent>
                        <TitleRight>
                            {'부서명'}
                        </TitleRight>
                        <InputRight value={team} onChange={(e) => { setTeam(e.target.value); }} />
                    </InputContent>
                </InputContainer>
                <InputContainer>
                    <InputContent>
                        <div>
                            {'담당자명'}
                        </div>
                        <input value={name} onChange={(e) => { setName(e.target.value); }} />
                    </InputContent>
                    <InputContent>
                        <TitleRight>
                            {'E-mail'}
                        </TitleRight>
                        <InputRight value={email} onChange={(e) => { setEmail(e.target.value); }} />
                    </InputContent>
                </InputContainer>
                <InputContainer>
                    <InputContent>
                        <div>
                            {'연락처'}
                        </div>
                        <input value={number} onChange={(e) => { setNumber(e.target.value); }} />
                    </InputContent>
                    <InputContent>
                        <TitleRight>
                            {'FAX'}
                        </TitleRight>
                        <InputRight value={faxNum} onChange={(e) => { setFaxNum(e.target.value); }} />
                    </InputContent>
                </InputContainer>
                <InputContainer>
                    <div>
                        {'내용'}
                    </div>
                    <textarea value={content} onChange={(e) => { setContent(e.target.value); }} />
                </InputContainer>
            </Content>
            <Button onClick={submit}>
                {'메일로 문의하기'}
            </Button>
            <KakaoButton onClick={openKakao}>
                {'카카오로 문의하기'}
            </KakaoButton>
        </Container>
    );
};

Contact.propTypes = {
    submitContact: PropTypes.func.isRequired,
};

export default Contact;
