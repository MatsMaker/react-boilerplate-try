import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';

const List = ({ className, result }) => {
  if (!result) {
    return null;
  }

  return (
    <ul className={className}>
      {_.map(result, (value, key) => (
        <li key={String(key)}>
          {key} {value}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  result: PropTypes.object,
};

const ResultList = styled(List)`
  li {
    color: green;
  }
`;

export default ResultList;
