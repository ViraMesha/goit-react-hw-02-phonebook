import PropTypes from 'prop-types';
import { ContactInformation, ContactDeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <ContactInformation>
      <div>
        {name}: {number}
      </div>
      <ContactDeleteBtn onClick={() => onDelete(id)}>Delete</ContactDeleteBtn>
    </ContactInformation>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
