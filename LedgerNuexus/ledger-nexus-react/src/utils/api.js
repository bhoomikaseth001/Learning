import axios from 'axios';

const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export function detectSuspicious(transactions, thresholdEth = 10) {
  return transactions.filter(tx => {
    const valueEth = parseFloat(tx.value) / 1e18;
    return valueEth > thresholdEth;
  });
}

export const fetchTransactions = async (walletAddress, apiKey) => {
    try {
        const response = await axios.get(ETHERSCAN_API_URL, {
            params: {
                module: 'account',
                action: 'txlist',
                address: walletAddress,
                sort: 'asc',
                apikey: apiKey
            }
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

export const fetchMarketData = async () => {
    try {
        const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching market data:', error);
        throw error;
    }
};