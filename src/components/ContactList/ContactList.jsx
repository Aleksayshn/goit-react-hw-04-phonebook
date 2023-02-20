import PropTypes from 'prop-types';
import { ContactListItem } from 'components';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
