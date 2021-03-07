import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  & img {
    width: 30px;
  }
`;

export const ArrowNext = ({ onPress }) => (
  <Container onClick={onPress}>
    <img src="https://user-images.githubusercontent.com/22593217/110232392-b5e1e380-7f60-11eb-9233-d81834319913.png" alt="arrowNext" />
  </Container>
);
