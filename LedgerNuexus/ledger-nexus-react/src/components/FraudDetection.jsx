import React, { useState } from 'react';
import { fetchMarketData } from '../utils/api'; // Adjust the import based on your api.js structure

const FraudDetection = () => {
    const [value, setValue] = useState(1.0);
    const [gas, setGas] = useState(21000);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCheckFraud = async () => {
        setLoading(true);
        try {
            // Replace with your fraud detection logic or API call
            const response = await fetch('/api/check-fraud', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value, gas }),
            });
            const data = await response.json();
            setPrediction(data.isFraud ? '⚠️ Suspicious Transaction Detected!' : '✅ Transaction Looks Normal');
        } catch (error) {
            console.error('Error checking fraud:', error);
            setPrediction('Error checking fraud');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>🚀 Predict Transaction Fraud</h2>
            <div>
                <label>
                    Transaction Value (ETH):
                    <input
                        type="number"
                        value={value}
                        min="0.01"
                        step="0.01"
                        onChange={(e) => setValue(parseFloat(e.target.value))}
                    />
                </label>
                <label>
                    Gas Used:
                    <input
                        type="number"
                        value={gas}
                        min="0"
                        onChange={(e) => setGas(parseInt(e.target.value))}
                    />
                </label>
                <button onClick={handleCheckFraud} disabled={loading}>
                    {loading ? 'Checking...' : 'Check for Fraud'}
                </button>
            </div>
            {prediction && <p>{prediction}</p>}
        </div>
    );
};

export default FraudDetection;