import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  & img {
    width: 30px;
  }
`;

export const ArrowPrevious = ({ onPress }) => (
  <Container onClick={onPress}>
    <img src="https://user-images.githubusercontent.com/22593217/110232394-b7131080-7f60-11eb-9b92-f07d14186954.png" alt="arrowPrev" />
  </Container>
);
