import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function WrapForm({ className, children }) {
  return (
    <div className={className}>
      <div className={`${className}-inner-wrapper`}>{children}</div>
    </div>
  );
}

WrapForm.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

const WrapFormBase = styled(WrapForm)`
  display: flex;
  justify-content: space-around;
`;

export default WrapFormBase;
