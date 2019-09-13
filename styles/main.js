import styled from 'styled-components';

import { isMobile } from './style';

export const MainItems = styled.div`
    display: flex;
    margin-top: 20px;

    ${isMobile} {
        flex-direction: column;
    }
`;

export const MainItem = styled.div`
    width: 30%;
    margin: 0 1.5% 20px;

    ${isMobile} {
        width: 100%;
    }
`;

export default null;
