import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#007bff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff"
      }}
    >
      <h2 style={{ margin: 0 }}>Dog Explorer 🐶</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          {'Home'}
        </Link>

        <Link to="/teste" style={{ color: "#fff", textDecoration: "none" }}>
          {'testess'}
        </Link>

        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          {'About'}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;