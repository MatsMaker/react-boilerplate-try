import styled from 'styled-components';

const WrapRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;

  div,
  a {
    flex: 1;
    padding: 10px;
    text-align: left;
  }
  .item-id,
  .user-name,
  .mail,
  .status {
    white-space: nowrap;
  }
`;

export default WrapRow;
