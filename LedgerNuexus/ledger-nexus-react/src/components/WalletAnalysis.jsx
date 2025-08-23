import React, { useState } from 'react';
import { fetchTransactions, detectSuspicious } from '../utils/api';

const WalletAnalysis = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [threshold, setThreshold] = useState(10.0);
    const [transactions, setTransactions] = useState([]);
    const [suspiciousTransactions, setSuspiciousTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAnalyze = async () => {
        setLoading(true);
        setError('');
        try {
            const txs = await fetchTransactions(walletAddress, apiKey);
            setTransactions(txs);
            const suspicious = detectSuspicious(txs, threshold);
            setSuspiciousTransactions(suspicious);
        } catch (err) {
            setError('Failed to fetch transactions. Check wallet address or API key.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>📊 Analyze Ethereum Wallet Transactions</h2>
            <div>
                <input
                    type="text"
                    placeholder="Wallet Address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Etherscan API Key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                />
                <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={threshold}
                    onChange={(e) => setThreshold(parseFloat(e.target.value))}
                />
                <button onClick={handleAnalyze} disabled={loading}>
                    {loading ? 'Analyzing...' : 'Analyze Wallet'}
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {suspiciousTransactions.length > 0 && (
                <div>
                    <h3>🚨 Suspicious Transactions</h3>
                    <ul>
                        {suspiciousTransactions.map((tx) => (
                            <li key={tx.hash}>
                                From: {tx.from}, To: {tx.to}, Value: {tx.value} ETH, Txn Hash: {tx.hash}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {transactions.length > 0 && (
                <div>
                    <h3>All Transactions</h3>
                    <ul>
                        {transactions.map((tx) => (
                            <li key={tx.hash}>
                                From: {tx.from}, To: {tx.to}, Value: {tx.value} ETH, Txn Hash: {tx.hash}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WalletAnalysis;