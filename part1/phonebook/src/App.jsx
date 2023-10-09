import { useState } from "react";
import SearchInput from "./components/SearchInput";
import PersonForm from "./components/PersonForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filteredContacts, setFilteredContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedContacts = persons.filter((obj) => obj.name === newName);

    if (matchedContacts.length) {
      alert(`${newName} is already added to allContacts`);
      return;
    } else {
      const personsCopy = [...persons];
      const lastId = personsCopy[personsCopy.length - 1].id;
      personsCopy.push({
        name: newName,
        number: newPhoneNumber,
        id: lastId + 1,
      });
      setPersons(personsCopy);
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
        {obj.name} {obj.number}
      </p>
    );
  });

  const allFilteredContacts = filteredContacts.map((obj, index) => {
    return (
      <p key={index}>
        {obj.name} {obj.number}
      </p>
    );
  });

  return (
    <div>
      <h2>Phonebook</h2>

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
