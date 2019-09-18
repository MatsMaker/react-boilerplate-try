import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TaskListItem from 'containers/TaskListItem';

function TaskList({ loading, error, tasks }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }
  if (error) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }
  if (tasks) {
    return <List items={tasks} component={TaskListItem} />;
  }

  return null;
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tasks: PropTypes.any,
};

export default TaskList;
