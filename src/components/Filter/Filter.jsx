import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ findContact, filter }) => {
  return (
    <label htmlFor="search" className={css.label}>
      Find contacts by name:
      <input onChange={findContact} type="text" name="search" value={filter} />
    </label>
  );
};
