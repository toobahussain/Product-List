function ProductCard({ product }) {
  return (
   <article className="Product-Card">
     <img
        src={product.image}
        alt={product.name}
      />

       <h2>{product.name}</h2>

<p className="price">${product.price}</p>

<p className="description">
  {product.description}
</p>

<p className="rating">
  ⭐ {product.rating}
</p>

<p className="category">
  {product.category}
</p>
    </article>

  )
}


export default ProductCard;