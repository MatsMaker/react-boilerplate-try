import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';

const List = ({ className, errors }) => {
  if (!errors) {
    return null;
  }

  return (
    <ul className={className}>
      {_.map(errors, (value, key) => (
        <li key={String(key)}>
          {key} {value}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.object,
};

const ErrorList = styled(List)`
  li {
    color: red;
  }
`;

export default ErrorList;
