import { useState, useEffect } from "react";
import BreedList from "../components/api/BreedList";
import Pagination from "../components/api/Paginations";

function BreedsPage() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch(
          `https://dogapi.dog/api/v2/breeds?page[number]=${page}&page[size]=10`
        );
        const json = await res.json();
        setBreeds(json.data);
        setPagination(json.meta.pagination);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, [page]);

  return (
    <div>
      <h2>Dog Breeds</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BreedList breeds={breeds} />
          <Pagination page={page} setPage={setPage} pagination={pagination} />
        </>
      )}
    </div>
  );
}

export default BreedsPage;