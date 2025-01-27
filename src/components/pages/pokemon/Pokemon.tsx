import PokeCard from "./PokeCard";

const Pokemon = () => {
  const tenItems = Array(10)
    .fill()
    .map((_, index) => `Item ${index + 1}`);

  console.log(tenItems);
  return (
    <div className="px-4 flex flex-wrap gap-4 items-center justify-center">
      {tenItems.map((item, idx) => (
        <PokeCard key={idx} />
      ))}
    </div>
  );
};

export default Pokemon;
