import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../containers/TaskListItem/Wrapper';

export default function NavigationBar() {
  return (
    <Wrapper>
      <Link to="/">[Home]</Link>
      <Link to="/create">[Create new]</Link>
      <Link to="/login">[Login]</Link>
    </Wrapper>
  );
}
