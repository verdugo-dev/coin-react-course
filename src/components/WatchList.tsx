import { useContext, useEffect, useRef, useState } from "react";
import { CoinstTable } from "./CoinstTable"
import { CoinInterface } from "../interface/Coint";
import { CoinsNotFound } from "./CoinsNotFound";
import { URL_API, URL_COINS } from "../constants/api";
import { FavoritesContext } from "../context/FavoritesContext";
import { useFavoritesStore } from "../store/favoritesStore";


export const WatchListContainer = () => {
    const [coinsList, setCoinsList] = useState<CoinInterface[]>([]);
    const [coinsListOriginal, setCoinsListOriginal] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>();
    const searchInput = useRef<HTMLInputElement>(null);
    // const {favorites, clearFavorites} = useContext(FavoritesContext);
    const {favorites, clearFavorites} = useFavoritesStore();

    useEffect(() => {
        fetch(`${URL_API}/${URL_COINS}&ids=${favorites.join(",")}`)
            .then(resp => resp.json())
            .then(data => {
                setCoinsList(data)
                setCoinsListOriginal(data);
            })
            .catch(error => {
                console.error("Error al obtener los datos: ", error);
                setError("Error al obtener los datos");
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    const handleSearch = () => {
        const searchValue = searchInput.current?.value || '';
        const newCoinList = coinsListOriginal.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()));
        setCoinsList(newCoinList);
    }

    const handleClearFavorites = () => {
        localStorage.removeItem("favorites")
        setCoinsList([]);
        setCoinsListOriginal([]);
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
        );
    }


    if (error) {
        return (
            <div className=" text-red-800 p-4 rounded-lg text-center">
                {error}
            </div>
        );
    }


    return (
        <>
            <button onClick={handleClearFavorites} className="bg-red-500">Limpiar</button>
            <input type="text" placeholder='Buscar Criptomoneda Favorita' ref={searchInput} onChange={handleSearch} className="w-full max-w-3xl mx-auto mb-4 block px-4 py-2.5 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            
            {
                coinsList.length > 0 
                    ? (<CoinstTable coins={coinsList} />)
                    : (<CoinsNotFound />)
            }
        </>
    )
}
