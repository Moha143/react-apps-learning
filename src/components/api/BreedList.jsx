import BreedCard from "./BreedCard";

function BreedList({ breeds }) {
  return (
    <div>
      {breeds.map((breed) => (
        <BreedCard key={breed.id} breed={breed} />
      ))}
    </div>
  );
}

export default BreedList;