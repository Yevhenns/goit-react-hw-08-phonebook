import React from 'react';
import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contactsApi';

import css from './App.module.css';

export const App = () => {
  const array = useSelector(getItems);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {array.length === 0 ? (
        <p>No contacts to show</p>
      ) : (
        <>
          <Filter />
          {isLoading && !error && <p>Loading contacts...</p>}
          <Contacts />
        </>
      )}
    </div>
  );
};
