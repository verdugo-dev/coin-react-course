import { useEffect, useState } from "react";
import { CoinInterface } from "../interface/Coint";
import { Link } from "react-router-dom";

const Coin = ({ id, name, image, symbol, current_price, price_change_24h }: CoinInterface) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.includes(id));
    }, []);
    
    const handleFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        
        if (isFavorite) {
            // Remove from favorites
            const filteredFavorites = favorites.filter( (favId: string) => favId != id);
            localStorage.setItem(`favorites`, JSON.stringify(filteredFavorites));
            setIsFavorite(false);
        } else {
            // Add to favorites
            localStorage.setItem(`favorites`, JSON.stringify([...favorites, id]));
            setIsFavorite(true);
        }

    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <td className="px-4 py-3 text-sm">
                <div className="flex items-center gap-2">
                    <Link to={`/coin/${name}`}>
                        <img src={image} alt={name} className="w-6 h-6 rounded-full object-cover ring-1 ring-gray-200" />
                        <span className="font-semibold text-gray-900">{name}</span>
                    </Link>
                </div>
            </td>
            <td className="px-4 py-3"><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">{symbol}</span></td>
            <td className="px-4 py-3 text-sm font-medium text-gray-800">{current_price}</td>
            <td className={`px-4 py-3 text-sm font-medium ${price_change_24h >= 0 ? "text-emerald-600" : "text-red-600"}`}>{price_change_24h}</td>
            <td className="px-4 py-3">
                <button
                    onClick={handleFavorites}
                    className={`cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${isFavorite
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                >
                    {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
                </button>
            </td>
        </tr>
    )
}

export default Coin;