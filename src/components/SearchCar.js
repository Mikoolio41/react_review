const SearchCar = (props) => {
  let { searchCar, handleChange } = props;
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchCar}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchCar;
