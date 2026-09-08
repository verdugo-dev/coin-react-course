import { CoinInterface } from "../interface/Coint";

export const coins: CoinInterface[] = [
    {
        order: 1,
        name: "Bitcoin",
        symbol: "BTC",
        price: 100,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 2,
        name: "Ethereum",
        symbol: "ETH",
        price: 200,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 3,
        name: "Ripple",
        symbol: "XRP",
        price: 300,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 4,
        name: "Cardano",
        symbol: "ADA",
        price: 400,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 5,
        name: "Polkadot",
        symbol: "DOT",
        price: 500,
        priceChange: 0.5,
        code: "USD"
    }
];