import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
    clearFavorites: () => void;
    countFavorites: () => number;
};

export const useFavoritesStore = create<FavoritesStore>()(persist(
    (set, get) => ({
        favorites: [],
        addFavorite: (id: string) => set((state) => ({ favorites: [...state.favorites, id] })),
        removeFavorite: (id: string) => set((state) => ({ favorites: state.favorites.filter((favId) => favId !== id) })),
        isFavorite: (id: string) => get().favorites.includes(id),
        clearFavorites: () => set({ favorites: [] }),
        countFavorites: () => get().favorites.length,
    }),
    {
        name: "favorites"
    }
));