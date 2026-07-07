function SearchBar({ searchTerm, setSearchTerm }) {
    const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    
    <article className="search-bar">
      
       <input type="text" placeholder="Search products" onChange={handleInputChange}  value={searchTerm}/>

    </article>

  )
}


export default SearchBar;