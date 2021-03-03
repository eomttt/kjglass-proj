import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// First way to import
import { ClipLoader } from 'react-spinners';

import { pointColor } from '~/styles/style';

const DEFAULT_TEXT = '잠시만 기다려주세요.';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  position: relative;
  & div {
    text-align: center;
  }
`;

const Loader = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Loading = ({ text = DEFAULT_TEXT }) => (
    <Container>
        <Content>
            <Loader>
                <ClipLoader
                    size={50}
                    color={pointColor}
                />
            </Loader>
            <div>
                {text}
            </div>
        </Content>
    </Container>
);

Loading.propTypes = {
    text: PropTypes.string.isRequired,
};


export default Loading;
