import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ErrorList = ({ errors }) => {
  if (!errors) {
    return null;
  }

  return (
    <ul>
      {_.map(errors, (value, key) => (
        <li key={String(key)}>
          {key} {value}
        </li>
      ))}
    </ul>
  );
};

ErrorList.propTypes = {
  errors: PropTypes.object,
};

export default ErrorList;
