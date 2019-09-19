/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ListItem from 'components/ListItem';
import RepoLink from './RepoLink';
import { resultSelector } from '../App/selectors';
import WrapRow from './WrapRow';
import EditLink from './EditLink';

function RepoListItem(props) {
  const { item, auth } = props;
  // Put together the content of the repository
  const content = (
    <WrapRow>
      <div className="item-id">{item.id}</div>
      <div className="user-name">{item.username}</div>
      <RepoLink className="mail" href={`mailto: ${item.email}`} target="_blank">
        {item.email}
      </RepoLink>
      <div className="text">{item.text}</div>
      <div className="status">{item.status}</div>
      {auth && (
        <EditLink className="edit" to={`edit/${item.id}`}>
          Edit
        </EditLink>
      )}
    </WrapRow>
  );
  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  auth: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  auth: resultSelector(),
});

const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RepoListItem);
