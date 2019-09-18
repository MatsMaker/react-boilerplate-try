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
import { Link } from 'react-router-dom';
import ListItem from 'components/ListItem';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';
import { resultSelector } from '../App/selectors';

function RepoListItem(props) {
  const { item, auth } = props;
  // Put together the content of the repository
  const content = (
    <Wrapper>
      <div>{item.id}</div>
      <IssueLink>{item.username}</IssueLink>
      <RepoLink href={`mailto: ${item.email}`} target="_blank">
        {item.email}
      </RepoLink>
      <div>{item.text}</div>
      <div>{item.status}</div>
      {auth && <Link to={`edit/${item.id}`}>[Edit]</Link>}
    </Wrapper>
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
