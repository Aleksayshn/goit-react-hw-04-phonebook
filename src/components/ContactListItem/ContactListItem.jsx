import PropTypes from 'prop-types';
import { Item, Info, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <Item>
    <Info>
      <p>{name}: </p>
      <p>{number}</p>
    </Info>
    <Button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </Button>
  </Item>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
