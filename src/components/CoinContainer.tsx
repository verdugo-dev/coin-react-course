import { useEffect, useState } from "react"
import { URL_API, URL_COINS } from "../constants/api";
import { useParams } from "react-router-dom";

export const CoinContainer = () => {

    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(`${URL_API}/${URL_COINS}&ids=${id}`)
            .then(resp => resp.json())
            .then(data => {
                setCoin(data[0])
            })
            .catch((error) => {
                console.error("Error al obtener los datos: ", error)
                setError("Error al obtener los datos");
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-800 p-4 rounded-lg text-center">
                {error}
            </div>
        );
    }

    return (
        <div>
            <h1>Coin Container</h1>
            <p>{ JSON.stringify(coin) }</p>
        </div>
    )
}
