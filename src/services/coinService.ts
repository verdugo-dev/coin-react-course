import { URL_API, URL_COINS } from "../constants/api";
import { CoinInterface } from "../interface/Coint";

export const getCryptos = async (): Promise<CoinInterface[]> => {
    const response = await fetch(`${URL_API}/${URL_COINS}`)

    if (!response.ok) {
        throw new Error("Failed to fetch coins list");
    }

    return response.json();
}