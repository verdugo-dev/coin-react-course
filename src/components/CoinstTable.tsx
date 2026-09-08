import { useEffect } from "react";
import { CoinInterface } from "../interface/Coint";
import Coin from "./Coin";

export const CoinstTable = ({ coins }: { coins: CoinInterface[] }) => {

    useEffect(() => {
        console.log("Coinst table renderizado")
    })
    
    return (
        <>

            <table className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border-collapse mb-7">
                <thead>
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Nombre</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Symbol</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Price</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Price Change</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide">Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coins.map(coin => (
                            <Coin key={coin.id} {...coin} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
