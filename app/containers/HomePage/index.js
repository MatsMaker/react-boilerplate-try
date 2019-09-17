import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { initiateAction } from './actions';
import { makeSelectIsInitiated } from './selectors';

const key = 'home';

export function HomePage({ isInitiated, initiate }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!isInitiated) {
      initiate();
    }
  });

  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}

HomePage.propTypes = {
  isInitiated: PropTypes.bool,
  initiate: PropTypes.func,
  getTaskList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isInitiated: makeSelectIsInitiated(),
});

const mapDispatchToProps = dispatch => ({
  initiate: () => dispatch(initiateAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
