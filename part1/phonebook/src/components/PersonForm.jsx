const PersonForm = ({
  newName,
  newPhoneNumber,
  handleInputChange,
  handlePhoneInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          name="name"
          onChange={handleInputChange}
          value={newName}
          type="text"
        />
      </div>
      <div>
        number:{" "}
        <input
          type="text"
          name="phone-number"
          onChange={handlePhoneInputChange}
          value={newPhoneNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

    
  );
};

export default PersonForm;
