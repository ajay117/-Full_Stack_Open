const SearchInput = ({ handleChange }) => {
  return (
    <div>
      filter shown with a{" "}
      <input type="search" name="search" onChange={handleChange} />
    </div>
  );
};

export default SearchInput;
