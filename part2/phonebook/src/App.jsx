import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import PersonForm from "./components/PersonForm";
import ContactList from "./components/ContactList";
import personsService from "./services/persons";
import NotificationMessage from "./components/NotificationMessage";

const App = () => {
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "040-123456", id: 1 },
    // { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    // { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    // { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filteredContacts, setFilteredContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState(false);
  const [message, setMessage] = useState("");

  const handleDeleteBtnClick = (obj) => {
    const confirmDelete = window.confirm(`Delete ${obj.name} ?`);
    if (confirmDelete) {
      personsService.deleteContact(obj.id);
      setPersons(persons.filter((person) => person.id !== obj.id));
      return;
    }
    return;
  };

  useEffect(() => {
    personsService.getAll().then((initialData) => setPersons(initialData));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedContact = persons.filter((obj) => obj.name === newName);
    const newContact = {
      name: newName,
      number: newPhoneNumber,
    };

    if (matchedContact.length) {
      const confirm = window.confirm(
        `${newName} is already added to phonebook, replace the old number with new one?`
      );

      if (confirm) {
        const id = matchedContact[0].id;
        personsService
          .update(id, newContact)
          .then((data) =>
            setPersons((prevstate) =>
              prevstate.map((obj) => (obj.id === id ? data : obj))
            )
          )
          .catch((err) => {
            // if (err.response.code === 404) {
            setMessage(
              `Information of ${newName} is already removed from server`
            );
            // }
          });

        setMessage("Successfully changed number.");

        setTimeout(() => setMessage(""), 3000);

        return;
      }

      return;
    } else {
      personsService
        .post(newContact)
        .then((newContact) => setPersons(persons.concat(newContact)));

      setMessage("Successfully added new number.");

      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneInputChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    const searchName = e.target.value.toLowerCase();
    if (searchName) {
      let searchedContacts = persons.filter((obj) => {
        return obj.name.toLowerCase().startsWith(searchName);
      });
      setFilteredContacts(searchedContacts);
      setFilter(true);
    } else {
      setFilteredContacts([]);
      setFilter(false);
    }
  };

  const allContacts = persons.map((obj, index) => {
    return (
      <p key={index}>
        {/* {console.log(obj)} */}
        {obj.name} {obj.number}
        <button onClick={() => handleDeleteBtnClick(obj)}>Delete</button>
      </p>
    );
  });

  const allFilteredContacts = filteredContacts.map((obj, index) => {
    return (
      <p key={index}>
        {obj.name} {obj.number}
        <button onClick={() => handleDeleteBtnClick(obj)}>Delete</button>
      </p>
    );
  });

  return (
    <div>
      <h2>Phonebook</h2>

      <NotificationMessage message={message} />
      <br />
      <SearchInput handleChange={handleSearchInputChange} />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleInputChange={handleInputChange}
        handlePhoneInputChange={handlePhoneInputChange}
        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <ContactList
        filter={filter}
        allContacts={allContacts}
        allFilteredContacts={allFilteredContacts}
      />
    </div>
  );
};

export default App;
