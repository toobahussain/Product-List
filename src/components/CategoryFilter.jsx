function CategoryFilter({categories, selectedCategory, setSelectedCategory}){
 const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
return (
    <div className="category-filter">
      
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>

      {categories.map((category) => (
        <option
        key={category}
        value={category}
        >
        {category}
        </option>
        ))}

       
      </select>
      
      
    </div>
  );
}
export default CategoryFilter;