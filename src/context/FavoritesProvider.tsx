import { useEffect, useState } from 'react';
import { FavoritesContext } from './FavoritesContext';

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {

    const [favorites, setFavorites] = useState<string[]>(JSON.parse(localStorage.getItem("favorites") || "[]"));

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (id: string) => {
        setFavorites((prevFavorites) => [...prevFavorites, id]);
        // localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    }

    const removeFavorite = (id: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
        // localStorage.setItem("favorites", JSON.stringify(favorites.filter((favId) => favId !== id)));
    }

    const isFavorite = (id: string) => {
        return favorites.includes(id);
    }

    const clearFavorites = () => {
        setFavorites([]);
        localStorage.clear();
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}