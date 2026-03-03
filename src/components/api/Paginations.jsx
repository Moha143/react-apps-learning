function Pagination({ page, setPage, pagination }) {
  if (!pagination) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          opacity: page === 1 ? 0.5 : 1,
          cursor: page === 1 ? "not-allowed" : "pointer"
        }}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>

      <span
        style={{
          margin: "0 15px",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#333"
        }}
      >
        Page {pagination.current} of {pagination.last}
      </span>

      <button
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          opacity: page === pagination.last ? 0.5 : 1,
          cursor: page === pagination.last ? "not-allowed" : "pointer"
        }}
        onClick={() =>
          setPage((prev) =>
            Math.min(prev + 1, pagination.last)
          )
        }
        disabled={page === pagination.last}
      >
        Next
      </button> 
       <div
  style={{
    marginTop: "15px",
    padding: "8px 12px",
    backgroundColor: "#f8f9fa",
    borderRadius: "6px",
    fontSize: "14px",
    color: "#555",
    display: "inline-block"
  }}
>
  Total Records: 
  <span
    style={{
      fontWeight: "bold",
      marginLeft: "6px",
      color: "#007bff"
    }}
  >
    {pagination.records}
  </span>
</div>
    </div>
  );
}

export default Pagination;