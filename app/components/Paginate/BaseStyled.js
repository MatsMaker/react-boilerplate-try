import styled from 'styled-components';
import Paginate from './index';

const PaginateBase = styled(Paginate)`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: row;
    li {
      display: block;
    }
    a {
      padding: 5px;
      border-radius: 3px;
      margin: 0 3px;

      &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
      }
    }
  }
  .active {
    color: gray;
  }
  .previous a,
  .next a {
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
  .previous.disabled a,
  .next.disabled a {
    color: gray;
    cursor: not-allowed;
  }
`;

export default PaginateBase;
