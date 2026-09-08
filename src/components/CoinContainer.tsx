import { useEffect, useState } from "react"
import { URL_API, URL_COINS } from "../constants/api";
import { useParams } from "react-router-dom";
import { CoinInterface } from "../interface/Coint";

const formatCurrency = (value: number | null) =>
    value == null
        ? "—"
        : new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: Math.abs(value) >= 1000 ? 0 : 2,
        }).format(value);

const formatPercent = (value: number | null) =>
    value == null ? "—" : `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;

const formatNumber = (value: number | null) =>
    value == null ? "—" : value.toLocaleString("en-US");

const formatDate = (value: Date | string | null) => {
    if (value == null) return "—";
    const date = new Date(value);
    return isNaN(date.getTime())
        ? "—"
        : date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
};

const changeAccent = (value: number | null) =>
    value == null ? "text-gray-900" : value >= 0 ? "text-emerald-600" : "text-red-600";

const StatCard = ({ label, value, accent }: { label: string; value: string; accent?: string }) => (
    <div className="bg-white shadow-sm rounded-lg p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
        <p className={`mt-1 text-lg font-semibold ${accent ?? "text-gray-900"}`}>{value}</p>
    </div>
);

export const CoinContainer = () => {

    const [coin, setCoin] = useState<CoinInterface | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { id } = useParams();

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
    }, [id]);

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

    if (!coin) {
        return (
            <div className="text-gray-500 p-4 rounded-lg text-center">
                No se encontró la criptomoneda
            </div>
        );
    }

    const isUp = coin.price_change_percentage_24h >= 0;

    return (
        <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center gap-4">
                    <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="font-crypto text-3xl font-bold text-gray-900">{coin.name}</h1>
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium uppercase">
                                {coin.symbol}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-3xl font-bold text-gray-900">
                                {formatCurrency(coin.current_price)}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${isUp ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                                {isUp ? "▲" : "▼"} {formatPercent(coin.price_change_percentage_24h)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 pb-8">
                <StatCard label="Capitalización de mercado" value={formatCurrency(coin.market_cap)} />
                <StatCard label="Ranking de mercado" value={formatNumber(coin.market_cap_rank)} />
                <StatCard label="Valoración totalmente diluida" value={formatCurrency(coin.fully_diluted_valuation)} />
                <StatCard label="Volumen 24h" value={formatCurrency(coin.total_volume)} />
                <StatCard label="Máximo 24h" value={formatCurrency(coin.high_24h)} />
                <StatCard label="Mínimo 24h" value={formatCurrency(coin.low_24h)} />
                <StatCard
                    label="Cambio de precio 24h"
                    value={formatCurrency(coin.price_change_24h)}
                    accent={changeAccent(coin.price_change_24h)}
                />
                <StatCard
                    label="Cambio market cap 24h"
                    value={formatCurrency(coin.market_cap_change_24h)}
                    accent={changeAccent(coin.market_cap_change_24h)}
                />
                <StatCard
                    label="Cambio % market cap 24h"
                    value={formatPercent(coin.market_cap_change_percentage_24h)}
                    accent={changeAccent(coin.market_cap_change_percentage_24h)}
                />
                <StatCard label="Suministro circulante" value={formatNumber(coin.circulating_supply)} />
                <StatCard label="Suministro total" value={formatNumber(coin.total_supply)} />
                <StatCard label="Suministro máximo" value={formatNumber(coin.max_supply)} />
                <StatCard label="Máximo histórico (ATH)" value={formatCurrency(coin.ath)} />
                <StatCard
                    label="Cambio % vs ATH"
                    value={formatPercent(coin.ath_change_percentage)}
                    accent={changeAccent(coin.ath_change_percentage)}
                />
                <StatCard label="Fecha ATH" value={formatDate(coin.ath_date)} />
                <StatCard label="Mínimo histórico (ATL)" value={formatCurrency(coin.atl)} />
                <StatCard
                    label="Cambio % vs ATL"
                    value={formatPercent(coin.atl_change_percentage)}
                    accent={changeAccent(coin.atl_change_percentage)}
                />
                <StatCard label="Fecha ATL" value={formatDate(coin.atl_date)} />
                <StatCard label="ROI" value="—" />
                <StatCard label="Última actualización" value={formatDate(coin.last_updated)} />
            </div>
        </div>
    )
}