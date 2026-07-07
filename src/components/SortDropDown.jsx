function SortDropDown({sortOrder, setSortOrder}){
 const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
return (
    <div className="sort-dropdown">
      
    <select value={sortOrder} onChange={handleSortChange}>
  <option value="default">Default</option>
  <option value="asc">Price: Low → High</option>
  <option value="desc">Price: High → Low</option>
</select>
      
      
    </div>
  );
}
export default SortDropDown;