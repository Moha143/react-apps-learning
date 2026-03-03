// import { useState, useEffect } from "react";
// import ProductList from "./components/ProductList";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//        const res = await fetch("https://dogapi.dog/api/v2/breeds?page[number]=1&page[size]=10");
//         const json = await res.json();
//       console.log("Fetched data:", data);
//       setProducts(data);
//       setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Product Dashboard</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ProductList produxcts={products} />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import BreedList from "./components/api/BreedList";
import Pagination from "./components/api/Paginations";
function App() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch(
         `https://dogapi.dog/api/v2/breeds?page[number]=${page}&page[size]=10`
        );
        const json = await res.json();

        setBreeds(json.data); // IMPORTANT
      setPagination(json.meta.pagination);   //

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, [page]);
  const filteredBreeds = breeds.filter((breed) =>
    breed.attributes.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const filterBreadSearch = breeds.filter((breed) =>
    breed.attributes.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dog Breeds</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <input
            type="text"
            placeholder="Search breed..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "8px", marginBottom: "20px", width: "300px" }} />
        <BreedList breeds={filterBreadSearch} />

        <Pagination page={page} setPage={setPage} pagination={pagination}  />
        </>
      )}
    </div>
  );
}

export default App;