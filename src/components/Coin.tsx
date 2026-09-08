import { useState } from "react";
import { CoinInterface } from "../interface/Coint";

const Coin = ({ order, name, symbol, price, priceChange, code }: CoinInterface) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const handleFavorites = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <span>{order}</span>
            <h2>{name}</h2>
            <span>{symbol}</span>
            <span>{price}</span>
            <span>{priceChange}</span>
            <span>{code}</span>
            <button onClick={handleFavorites}>
                {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
            </button>
        </div>
    )
}

export default Coin;