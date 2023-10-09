const ContactList = ({ filter, allContacts, allFilteredContacts }) => {
  return <div>{filter ? allFilteredContacts : allContacts}</div>;
};



export default ContactList;
