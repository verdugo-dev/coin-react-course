import { useEffect, useRef, useState } from "react";
import { CoinstTable } from "./CoinstTable"
import { CoinInterface } from "../interface/Coint";
import { CoinsNotFound } from "./CoinsNotFound";
import { URL_API, URL_COINS } from "../constants/api";
import { useQuery } from "@tanstack/react-query";
import { getCryptos } from "../services/coinService";


export const CoinsContainer = () => {

    const [search, setSearch] = useState('');

    const {data: coinsList, isLoading, isFetching, error} = useQuery({
        queryKey: ['cryptos'],
        queryFn: getCryptos,
    });

    const filteredCoins = coinsList?.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())) ?? [];

    // const [coinsList, setCoinsList] = useState<CoinInterface[]>([]);
    // const [coinsListOriginal, setCoinsListOriginal] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>();
    const searchInput = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //     const data = [];
    //     fetch(`${URL_API}/${URL_COINS}`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setCoinsList(data)
    //             setCoinsListOriginal(data);
    //         })
    //         .catch(error => {
    //             console.error("Error al obtener los datos: ", error);
    //             setError("Error al obtener los datos");
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         })
    // }, []);

    // const handleSearch = () => {
    //     const searchValue = searchInput.current?.value || '';
    //     const newCoinList = coinsListOriginal.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()));
    //     setCoinsList(newCoinList);
    // }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
        );
    }


    if (error) {
        return (
            <div className=" text-red-800 p-4 rounded-lg text-center">
                {error.message}
            </div>
        );
    }


    return (
        <>
            <input 
                type="text" 
                placeholder='Buscar Criptomoneda' 
                ref={searchInput} 
                onChange={e => setSearch(e.target.value)} 
                className="w-full max-w-3xl mx-auto mb-4 block px-4 py-2.5 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            
            { isFetching && <div>Actualizando datos...</div>}
            { filteredCoins && filteredCoins.length > 0 
                ? (<CoinstTable coins={filteredCoins} />)
                : (<CoinsNotFound />)
            }
        </>
    )
}
