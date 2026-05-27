import useFetch from "../hooks/useFetch";

const categoriesUrl =
  "https://www.themealdb.com/api/json/v1/1/categories.php";

function Home() {
  const { data, loading, error } = useFetch<any>(categoriesUrl);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Recipe Categories</h1>

      {data?.categories?.map((category: any) => (
        <p key={category.idCategory}>
          {category.strCategory}
        </p>
      ))}
    </div>
  );
}

export default Home;