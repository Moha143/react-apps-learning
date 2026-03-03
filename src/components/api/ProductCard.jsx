function ProductCard({ product }) {
  const color = product.data?.color || product.data?.Color;

  return (
    <div style={{
      border: "1px solid #ca1d1d",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px"
    }}>
      <h3>{product.name}</h3>
      <p>Color: {color || "N/A"}</p>
    </div>
  );
}

export default ProductCard;


