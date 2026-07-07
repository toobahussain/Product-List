import './App.css';
import { useState, useMemo } from 'react';
import products from "./data/products.json";

import ProductCard from "./components/ProductCard";
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import SortDropDown from './components/SortDropDown';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = [
  ...new Set(products.map((product) => product.category))
];


 const filteredAndSortedProducts = useMemo(() => {
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Create a copy before sorting
  const sortedProducts = [...filteredProducts];

 
  if (sortOrder === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
}, [searchTerm, selectedCategory, sortOrder]);
     
  return (
    <div className="App">
     <h1>Product List UI</h1>
     <div className="controls">
     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
     <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
     <SortDropDown
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
     />
     </div>
     <div className='products'>
      {filteredAndSortedProducts.map((product)=>(
        <ProductCard key={product.id} product={product} 
        />

      )
      )}
     </div>
     
    </div>
  );
}

export default App;
