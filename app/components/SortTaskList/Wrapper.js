import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: space-between;
  & > div {
    min-width: 150px;
    margin: 0 15px;
  }
`;

export default Wrapper;
