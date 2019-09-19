import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

function Paginate({ className, ...props }) {
  return (
    <div className={className}>
      <ReactPaginate {...props} />
    </div>
  );
}

Paginate.propTypes = {
  className: PropTypes.string,
  props: PropTypes.any,
};

export default Paginate;
