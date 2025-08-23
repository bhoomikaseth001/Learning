import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './MarketOverview.css'; // Optional: Import CSS for styling

const MarketOverview = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
                setMarketData(response.data);
            } catch (err) {
                setError('Error fetching market data');
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();
    }, []);

    if (loading) return <div>Loading market data...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="market-overview">
            <h2>📈 Cryptocurrency Market Overview</h2>
            {marketData.length > 0 ? (
                <ul>
                    {marketData.map((coin, index) => (
                        <li key={coin.id}>
                            <strong>{index + 1}. {coin.name} ({coin.symbol.toUpperCase()})</strong>
                            <p>Price (USD): ${coin.current_price.toFixed(2)}</p>
                            <p>24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No market data available.</p>
            )}
        </div>
    );
};

export default MarketOverview;