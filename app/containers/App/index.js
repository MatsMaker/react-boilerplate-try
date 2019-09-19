/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import EditTaskPage from 'containers/EditTaskPage/Loadable';
import CreateTaskPage from 'containers/CreateTaskPage/Loadable';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { AUTH_KEY } from './constants';
import reducer from './authReducer';
import saga from './authSaga';
import { loginInitAction } from './actions';

const key = AUTH_KEY;

function App({ initAuth }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/create" component={CreateTaskPage} />
        <Route path="/edit/:id" component={EditTaskPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  initAuth: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  initAuth: () => dispatch(loginInitAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
