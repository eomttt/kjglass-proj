import styled, { css } from 'styled-components';

const common = css`
    color: black;
`;

export const pointColor = 'red';
export const subPointColor = '#384aa5';
export const lightGrayColor = '#8080802b';

export const navBarHeight = '75px';
export const footerHeight = '60px';

export const sideBarWidth = '280px';

export const mobileNavBar = '50px';

export const isMobile = '@media (max-width: 768px)';

export const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1364px;
    margin: ${navBarHeight} auto ${footerHeight};
    ${isMobile} {
        margin: ${footerHeight} auto ${footerHeight};
    }
`;

export const ViewContent = styled.div`
    display: flex;
    position: relative;
    padding-left: ${sideBarWidth};
    ${isMobile} {
        padding: 0;        
    }
`;

export const ItemContainer = styled.div`

`;

export default common;
