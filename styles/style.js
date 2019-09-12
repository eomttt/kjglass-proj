import styled, { css } from 'styled-components';

const common = css`
    color: black;
`;

export const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1364px;
    margin-top: 75px;
`;

export const ViewContent = styled.div`
    margin: auto 10px;
    display: flex;
    flex-direction: column;
`;

export default common;
