function BreedCard({ breed }) {
  // const { name, description, life, hypoallergenic } = breed.attributes;
  const names = breed.attributes.name;
  const descriptions = breed.attributes.description;
  const lifeSpans = breed.attributes.life;
  const hypoallergenicStatus = breed.attributes.hypoallergenic;
  console.log("Received breed:", breed);
  return (
    <div style={{
      border: "1px solid #ac2929",
      padding: "15px",
      marginBottom: "15px",
      borderRadius: "10px"
    }}>
      <h2>{names}</h2>

      <p>{descriptions}</p>

      <p>
        Life Span: {lifeSpans.min} - {lifeSpans.max} years
      </p>

      <p>
        Hypoallergenic: {hypoallergenicStatus ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default BreedCard;