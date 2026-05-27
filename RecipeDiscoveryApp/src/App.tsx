import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";

function App() {
  return (

    // Define the routes for the application
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/category/:categoryName" element={<Category />}/>

      <Route path="/recipe/:recipeId" element={<RecipeDetail />}/>

      <Route path="/favorites" element={<Favorites />}/>

      <Route path="/search" element={<SearchResults />}/>
    </Routes>
  );
}

export default App;