import React from 'react';
import { ContactItem } from './ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/selectors';

import css from './Contacts.module.css';

export const Contacts = () => {
  const contactsList = useSelector(getItems);
  const filter = useSelector(getFilter);    

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    
  );
 
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.listItem} key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
            />
          </li>
        );
      })}
    </ul>
  );
};
