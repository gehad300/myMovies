function Search({ SearchKey, handleChange, searchButton }) {
  return (
    <>
      <div className="d-flex justify-content-center mt-4 ">
        <input
          value={SearchKey}
          onChange={handleChange}
          className="mx-1"
          type="text"
          placeholder="Type Movies Name"
        />
        <button onClick={searchButton} className="btn btn-dark mx-1">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
