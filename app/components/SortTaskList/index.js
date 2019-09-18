import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Wrapper from '../../containers/TaskListItem/Wrapper';

const fieldOptions = [
  {
    value: 'id',
    label: 'id',
  },
  {
    value: 'username',
    label: 'username',
  },
  {
    value: 'email',
    label: 'email',
  },
  {
    value: 'status',
    label: 'status',
  },
];

const directionOptions = [
  {
    value: 'asc',
    label: 'asc',
  },
  {
    value: 'desc',
    label: 'desc',
  },
];

function SortTaskList({ onChange, value }) {
  const [field, setField] = useState(fieldOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);

  const handleChangeField = selectedOption => {
    setField(selectedOption);
    onChange({
      ...value,
      sort_field: selectedOption.value,
    });
  };

  const handleChangeDirection = selectedOption => {
    setDirection(selectedOption);
    onChange({
      ...value,
      sort_direction: selectedOption.value,
    });
  };

  return (
    <Wrapper>
      <Select
        value={field}
        onChange={handleChangeField}
        options={fieldOptions}
      />
      <Select
        value={direction}
        onChange={handleChangeDirection}
        options={directionOptions}
      />
    </Wrapper>
  );
}

SortTaskList.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
};

export default SortTaskList;
