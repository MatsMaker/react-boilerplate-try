import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ResultList = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <ul>
      {_.map(result, (value, key) => (
        <li key={String(key)}>
          {key} {value}
        </li>
      ))}
    </ul>
  );
};

ResultList.propTypes = {
  result: PropTypes.object,
};

export default ResultList;
