import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Breeds from "./pages/BreedsPage";
import About from "./pages/AboutPage";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import BreedsPage from "./pages/BreedsPage";
import AboutPages from "./pages/AboutPage";
import AtomTesting from "./pages/AtomPage";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teste" element={<BreedsPage />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/atom" element={<AtomTesting />} />
        </Routes>
      </div>
    </>
  );
}

export default App;