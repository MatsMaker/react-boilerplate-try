import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactPaginate from 'react-paginate';
import messages from './messages';
import Section from './Section';
import H2 from '../../components/H2';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { setFilterAction } from './actions';
import { makeSelectHomeState } from './selectors';
import TaskList from '../../components/TaskList';
import SortTaskList from '../../components/SortTaskList';
import NavigationBar from '../../components/NavigationBar';
import { KEY } from './constants';

const key = KEY;

export function HomePage({ state, ...props }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    props.updateFilter({
      ...state.taskListRequest,
    });
  }, []);

  const onChangePage = data => {
    props.updateFilter({
      ...state.taskListRequest,
      page: data.selected,
    });
  };

  const onChangeSort = data => {
    props.updateFilter({
      ...state.taskListRequest,
      sort_field: data.sort_field,
      sort_direction: data.sort_direction,
    });
  };

  return (
    <>
      <NavigationBar />
      <Section>
        <H2>
          <FormattedMessage {...messages.title} />
        </H2>
        <SortTaskList onChange={onChangeSort} value={state.taskListRequest} />
        <TaskList
          loading={state.taskListIsLoading}
          error={state.loadError}
          tasks={state.taskList}
        />
        {state.taskList.length > 0 && (
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={Number(state.totalTaskCount)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={onChangePage}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        )}
      </Section>
    </>
  );
}

HomePage.propTypes = {
  state: PropTypes.any,
  updateFilter: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  state: makeSelectHomeState(),
});

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => dispatch(setFilterAction(filter)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
