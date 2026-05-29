import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const [testFavorites, setTestFavorites] = useLocalStorage<string[]>(
    "testFavorites",
    []
  );

  function handleAddTestFavorite() {
    setTestFavorites([...testFavorites, "52772"]);
  }

  function handleClearTestFavorites() {
    setTestFavorites([]);
  }

  return (
    <div>
      <h1>Testing useLocalStorage</h1>

      <p>Favorites saved: {testFavorites.length}</p>

      <button onClick={handleAddTestFavorite}>
        Add Test Favorite
      </button>

      <button onClick={handleClearTestFavorites}>
        Clear Test Favorites
      </button>

      <ul>
        {testFavorites.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;