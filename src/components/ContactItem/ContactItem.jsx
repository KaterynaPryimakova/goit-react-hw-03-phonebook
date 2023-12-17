import React from 'react';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li key={id} className={css.item} id={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deleteContact(id)} className={css.button}>
        Delete
      </button>
    </li>
  );
};
