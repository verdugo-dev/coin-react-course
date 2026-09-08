import { CoinInterface } from "../interface/Coint";

export const coins: CoinInterface[] = [
    {
        order: 1,
        name: "Bitcoin",
        icon: "/icons/btc.png",
        symbol: "BTC",
        price: 100,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 2,
        name: "Ethereum",
        icon: "/icons/eth.png",
        symbol: "ETH",
        price: 200,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 3,
        name: "Ripple",
        icon: "/icons/xrp.png",
        symbol: "XRP",
        price: 300,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 4,
        name: "Cardano",
        icon: "/icons/ada.png",
        symbol: "ADA",
        price: 400,
        priceChange: 0.5,
        code: "USD"
    },
    {
        order: 5,
        name: "Polkadot",
        icon: "/icons/dot.png",
        symbol: "DOT",
        price: 500,
        priceChange: 0.5,
        code: "USD"
    }
];