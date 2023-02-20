import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import {
  Container,
  ContactForm,
  Filter,
  ContactList,
  Notification,
} from 'components';
import { Title } from './App.styled';
// import contacts from '../../contacts.json';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`Contact ${name} already exists!`);
      return false;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
    return true;
  };

  const deleteContact = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId));

  const filterChange = e => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const isFilteredContacts = getVisibleContacts().length;
  const isSavedContacts = contacts.length;

  return (
    <Container title="Phonebook">
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      {!!isSavedContacts && (
        <Filter value={filter} onFilterChange={filterChange} />
      )}
      {!!isFilteredContacts && (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      )}
      {!isSavedContacts && (
        <Notification message="There are no contacts yet. Please, add someone!" />
      )}
      {!!isSavedContacts && !isFilteredContacts && (
        <Notification message="No contacts found..." />
      )}
    </Container>
  );
};