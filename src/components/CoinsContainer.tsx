import { useEffect, useRef, useState } from "react";
import { CoinstTable } from "./CoinstTable"
import { CoinInterface } from "../interface/Coint";
import { CoinsNotFound } from "./CoinsNotFound";


export const CoinsContainer = () => {
    const [coinsList, setCoinsList] = useState<CoinInterface[]>([]);
    const [coinsListOriginal, setCoinsListOriginal] = useState<CoinInterface[]>([]);
    const searchInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const data = [];
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1`)
            .then(resp => resp.json())
            .then(data => {
                setCoinsList(data)
                setCoinsListOriginal(data);
            })
            .catch(error => {
                console.error("Error al obtener los datos: ", error);
            })
    }, []);

    const handleSearch = () => {
        const searchValue = searchInput.current?.value || '';
        const newCoinList = coinsListOriginal.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()));
        setCoinsList(newCoinList);
    }


    return (
        <>
            <input type="text" placeholder='Buscar Criptomoneda' ref={searchInput} onChange={handleSearch} className="w-full max-w-3xl mx-auto mb-4 block px-4 py-2.5 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            
            {
                coinsList.length > 0 
                    ? (<CoinstTable coins={coinsList} />)
                    : (<CoinsNotFound />)
            }
        </>
    )
}
