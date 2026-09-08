import { useRef, useState } from "react";
import { coins } from "../data/coins";
import { CoinInterface } from "../interface/Coint";
import Coin from "./Coin";

export const CoinstTable = () => {
    const [coinsList, setCoinsList] = useState<CoinInterface[]>(coins);
    const searchInput = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const searchValue = searchInput.current?.value || '';
        const newCoinList = coins.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()));
        setCoinsList(newCoinList);
    }

    return (
        <>
            <input type="text" placeholder='Buscar Criptomoneda' ref={searchInput} onChange={handleSearch} className="w-full max-w-3xl mx-auto mb-4 block px-4 py-2.5 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

            <table className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Orden</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Nombre</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Symbol</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Price</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Price Change</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Code</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coinsList.map(coin => (
                            <Coin key={coin.order} {...coin} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
