import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            deleteContact={deleteContact}
            name={name}
            number={number}
            id={id}
            key={id}
          />
        );
      })}
    </ul>
  );
};
