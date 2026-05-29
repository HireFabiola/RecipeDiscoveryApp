import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (recipeId: string) => void;
  removeFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

type FavoritesProviderProps = {
  children: React.ReactNode;
};

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<string[]>(
    "favoriteRecipes",
    []
  );

  function addFavorite(recipeId: string) {
    if (!favorites.includes(recipeId)) {
      setFavorites([...favorites, recipeId]);
    }
  }

  function removeFavorite(recipeId: string) {
    setFavorites(favorites.filter((id) => id !== recipeId));
  }

  function isFavorite(recipeId: string) {
    return favorites.includes(recipeId);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside a FavoritesProvider");
  }

  return context;
}