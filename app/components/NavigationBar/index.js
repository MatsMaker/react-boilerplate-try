import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Navigation({ className }) {
  return (
    <div className={className}>
      <Link to="/">Home</Link>
      <Link to="/create">Create new</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

const WrapFormBase = styled(Navigation)`
  background-color: red;
  display: flex;

  a {
    display: block;
    padding: 25px;
    color: white;
    text-decoration: none;

    &:hover {
      background-color: white;
      color: red;
    }
  }
`;

export default WrapFormBase;
