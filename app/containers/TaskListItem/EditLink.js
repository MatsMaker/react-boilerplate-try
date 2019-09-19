import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditLink = styled(Link)`
  color: blue;
  text-decoration: none;
  white-space: nowrap;
  text-align: right;

  &:hover {
    color: red;
  }
`;

export default EditLink;
