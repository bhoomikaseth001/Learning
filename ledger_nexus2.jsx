import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Banknote, Landmark, Loader2, Search, TrendingUp } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// --- Helper Functions ---
const weiToEther = (wei: string) => {
    try {
        return parseInt(wei) / 10 ** 18;
    } catch (error) {
        return 0; // Return 0 in case of error.
    }
};

interface Transaction {
    hash: string;
    from: string;
    to: string;
    value: string;
    timeStamp: string;
}

interface MarketData {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
}

const LedgerNexusApp = () => {
    // --- State ---
    const [walletAddress, setWalletAddress] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [threshold, setThreshold] = useState<number>(10.0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [suspiciousTransactions, setSuspiciousTransactions] = useState<Transaction[]>([]);
    const [marketData, setMarketData] = useState<MarketData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fraudValue, setFraudValue] = useState<number>(1.0);
    const [fraudGas, setFraudGas] = useState<number>(21000);
    const [fraudPrediction, setFraudPrediction] = useState<string | null>(null);

    // --- Effects ---

    // Fetch market data
    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: MarketData[] = await response.json();
                setMarketData(data);
            } catch (error: any) {
                setError(`Failed to fetch market data: ${error.message}`);
            }
        };

        fetchMarketData();
        const intervalId = setInterval(fetchMarketData, 60000); // Refresh every 60 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    // --- Functions ---
    const fetchTransactions = async (address: string, key: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${key}`
            );
            const data = await response.json();

            if (data.status !== '1') {
                throw new Error(data.message || 'Failed to fetch transactions');
            }
            setTransactions(data.result);
            return data.result; // Return for further processing
        } catch (error: any) {
            setError(`Error fetching transactions: ${error.message}`);
            setTransactions([]);
            return []; // Return empty array on error
        } finally {
            setLoading(false);
        }
    };

    const analyzeWallet = async () => {
        if (!walletAddress || !apiKey) {
            setError('Please enter both Wallet Address and API Key.');
            return;
        }

        const fetchedTxs = await fetchTransactions(walletAddress, apiKey); // Await the fetch
        if (fetchedTxs.length > 0) {
            const suspicious = fetchedTxs.filter((tx: Transaction) => {
                const valueEth = weiToEther(tx.value);
                return valueEth > threshold;
            });
            setSuspiciousTransactions(suspicious);
        } else if (!error) {
            // Only set this if there wasn't already an error from fetchTransactions
            setSuspiciousTransactions([]); // Clear any previous suspicious transactions
        }
    };

    const predictFraud = () => {
        // Simplified fraud prediction (replace with actual model interaction)
        if (fraudValue > 100 || fraudGas > 100000) {
            setFraudPrediction('⚠️ Suspicious Transaction Detected!');
        } else {
            setFraudPrediction('✅ Transaction Looks Normal');
        }
    };

    // --- Render ---
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Ledger Nexus
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Crypto Wallet Analysis & Fraud Detection
                    </p>
                </div>

                <Tabs defaultValue="wallet" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="wallet">
                            <Banknote className="mr-2 h-4 w-4" /> Wallet Analysis
                        </TabsTrigger>
                        <TabsTrigger value="fraud">
                            <AlertCircle className="mr-2 h-4 w-4" /> Fraud Detection
                        </TabsTrigger>
                        <TabsTrigger value="about">
                            <Landmark className="mr-2 h-4 w-4" /> About App
                        </TabsTrigger>
                    </TabsList>

                    {/* --- Wallet Analysis Tab --- */}
                    <TabsContent value="wallet">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center">
                                    <Search className="mr-2 h-6 w-6 text-blue-400" />
                                    Analyze Ethereum Wallet Transactions
                                </CardTitle>
                                <CardDescription>
                                    Enter a wallet address and API key to view transactions and detect suspicious activity.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        type="text"
                                        placeholder="Wallet Address (0x...)"
                                        value={walletAddress}
                                        onChange={(e) => setWalletAddress(e.target.value)}
                                        className="bg-black/20 text-white border-purple-500/30"
                                    />
                                    <Input
                                        type="password"
                                        placeholder="Etherscan API Key"
                                        value={apiKey}
                                        onChange={(e) => setApiKey(e.target.value)}
                                        className="bg-black/20 text-white border-purple-500/30"
                                    />
                                    <Input
                                        type="number"
                                        placeholder="Suspicious Threshold (ETH)"
                                        value={threshold}
                                        onChange={(e) => setThreshold(parseFloat(e.target.value))}
                                        className="bg-black/20 text-white border-purple-500/30"
                                    />
                                    <Button
                                        onClick={analyzeWallet}
                                        disabled={loading}
                                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Analyzing...
                                            </>
                                        ) : (
                                            "Analyze Wallet"
                                        )}
                                    </Button>
                                </div>

                                {error && (
                                    <Alert variant="destructive" className="mt-4 bg-red-500/20 text-red-400 border-red-500/30">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}

                                {suspiciousTransactions.length > 0 && (
                                    <div className="mt-6">
                                        <h2 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center">
                                            <AlertCircle className="mr-2 h-6 w-6" />
                                            Suspicious Transactions
                                        </h2>
                                        <Table className="bg-black/20 border-purple-500/30">
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="text-white">Transaction Hash</TableHead>
                                                    <TableHead className="text-white">From</TableHead>
                                                    <TableHead className="text-white">To</TableHead>
                                                    <TableHead className="text-white">Value (ETH)</TableHead>
                                                    <TableHead className="text-white">Timestamp</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {suspiciousTransactions.map((tx) => (
                                                    <TableRow key={tx.hash} className="hover:bg-purple-500/10 transition-colors">
                                                        <TableCell className="font-mono text-purple-300">{tx.hash}</TableCell>
                                                        <TableCell className="font-mono text-blue-300">{tx.from}</TableCell>
                                                        <TableCell className="font-mono text-green-300">{tx.to}</TableCell>
                                                        <TableCell className="text-yellow-300">{weiToEther(tx.value).toFixed(4)}</TableCell>
                                                        <TableCell className="text-gray-300">
                                                            {new Date(parseInt(tx.timeStamp) * 1000).toLocaleString()}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                )}
                                {transactions.length > 0 && (
                                    <div className="mt-6">
                                        <h2 className="text-2xl font-semibold text-white mb-4">All Transactions</h2>
                                        <Table className="bg-black/20 border-purple-500/30">
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="text-white">Transaction Hash</TableHead>
                                                    <TableHead className="text-white">From</TableHead>
                                                    <TableHead className="text-white">To</TableHead>
                                                    <TableHead className="text-white">Value (ETH)</TableHead>
                                                    <TableHead className="text-white">Timestamp</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {transactions.map((tx) => (
                                                    <TableRow key={tx.hash} className="hover:bg-purple-500/10 transition-colors">
                                                        <TableCell className="font-mono text-purple-300">{tx.hash}</TableCell>
                                                        <TableCell className="font-mono text-blue-300">{tx.from}</TableCell>
                                                        <TableCell className="font-mono text-green-300">{tx.to}</TableCell>
                                                        <TableCell className="text-gray-300">{weiToEther(tx.value).toFixed(4)}</TableCell>
                                                        <TableCell className="text-gray-300">
                                                            {new Date(parseInt(tx.timeStamp) * 1000).toLocaleString()}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center">
                                    <TrendingUp className="mr-2 h-6 w-6 text-green-400" />
                                    Market Overview
                                </CardTitle>
                                <CardDescription>
                                    Top 10 Cryptocurrencies by Market Cap
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {marketData.length > 0 ? (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {marketData.map((coin) => (
                                                <Card key={coin.id} className="bg-black/20 border-purple-500/30 p-4">
                                                    <CardHeader className="space-y-1">
                                                        <CardTitle className="text-lg font-semibold text-white flex items-center">
                                                            {coin.name} ({coin.symbol.toUpperCase()})
                                                        </CardTitle>
                                                        <CardDescription className="text-gray-400">
                                                            Market Cap: ${coin.market_cap.toLocaleString()}
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-xl font-bold text-white">
                                                            Price: ${coin.current_price.toFixed(2)}
                                                        </p>
                                                        <p
                                                            className={cn(
                                                                "text-sm",
                                                                coin.price_change_percentage_24h > 0
                                                                    ? "text-green-400"
                                                                    : "text-red-400"
                                                            )}
                                                        >
                                                            {coin.price_change_percentage_24h.toFixed(2)}% (24h)
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                        <ResponsiveContainer width="100%" height={300}>
                                            <BarChart
                                                data={marketData}
                                                margin={{
                                                    top: 5,
                                                    right: 30,
                                                    left: 20,
                                                    bottom: 5,
                                                }}
                                                className="bg-black/20 border-purple-500/30 rounded-lg p-4"
                                            >
                                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                                                <XAxis dataKey="symbol" stroke="#fff" />
                                                <YAxis stroke="#fff" tickFormatter={(value: number) => `$${value}`} />
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: '#222', borderColor: '#555', color: '#fff' }}
                                                    labelStyle={{ color: '#fff' }}
                                                    itemStyle={{ color: '#fff' }}
                                                />
                                                <Legend wrapperStyle={{ color: '#fff' }} />
                                                <Bar dataKey="current_price" fill="#8884d8" name="Price (USD)" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                ) : (
                                    <p className="text-gray-400">Loading market data...</p>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* --- Fraud Detection Tab --- */}
                    <TabsContent value="fraud">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center">
                                    <AlertCircle className="mr-2 h-6 w-6 text-red-400" />
                                    Predict Transaction Fraud
                                </CardTitle>
                                <CardDescription>
                                    Enter transaction details to predict the likelihood of fraud.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        type="number"
                                        placeholder="Transaction Value (ETH)"
                                        value={fraudValue}
                                        onChange={(e) => setFraudValue(parseFloat(e.target.value))}
                                        className="bg-black/20 text-white border-purple-500/30"
                                    />
                                    <Input
                                        type="number"
                                        placeholder="Gas Used"
                                        value={fraudGas}
                                        onChange={(e) => setFraudGas(parseInt(e.target.value))}
                                        className="bg-black/20 text-white border-purple-500/30"
                                    />
                                    <Button
                                        onClick={predictFraud}
                                        className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                                    >
                                        Check for Fraud
                                    </Button>
                                </div>
                                {fraudPrediction && (
                                    <Alert
                                        variant={fraudPrediction.startsWith('⚠️') ? 'destructive' : 'default'}
                                        className={cn(
                                            "mt-4",
                                            fraudPrediction.startsWith('⚠️')
                                                ? "bg-red-500/20 text-red-400 border-red-500/30"
                                                : "bg-green-500/20 text-green-400 border-green-500/30"
                                        )}
                                    >
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Prediction</AlertTitle>
                                        <AlertDescription>{fraudPrediction}</AlertDescription>
                                    </Alert>
                                )}
                            </CardContent>
                        </Card>
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center">
                                    <TrendingUp className="mr-2 h-6 w-6 text-green-400" />
                                    Market Highlights
                                </CardTitle>
                                <CardDescription>
                                    Key market movements
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {marketData.length > 0 ? (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-green-400">Top Gainer (24h)</h3>
                                                {marketData.length > 0 &&
                                                    <Card className="bg-black/20 border-green-500/30 p-4">
                                                        <CardHeader className="space-y-1">
                                                            <CardTitle className="text-lg font-semibold text-white flex items-center">
                                                                {marketData.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)[0].name}
                                                                ({marketData.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)[0].symbol.toUpperCase()})
                                                            </CardTitle>

                                                        </CardHeader>
                                                        <CardContent>
                                                            <p
                                                                className={cn(
                                                                    "text-xl font-bold ",
                                                                    "text-green-400"
                                                                )}
                                                            >
                                                                +{marketData.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)[0].price_change_percentage_24h.toFixed(2)}%
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                }
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-red-400">Top Loser (24h)</h3>
                                                {marketData.length > 0 &&
                                                    <Card className="bg-black/20 border-red-500/30 p-4">
                                                        <CardHeader className="space-y-1">
                                                            <CardTitle className="text-lg font-semibold text-white flex items-center">
                                                                {marketData.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)[0].name}
                                                                ({marketData.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)[0].symbol.toUpperCase()})
                                                            </CardTitle>

                                                        </CardHeader>
                                                        <CardContent>
                                                            <p
                                                                className={cn(
                                                                    "text-xl font-bold ",
                                                                    "text-red-400"
                                                                )}
                                                            >
                                                                {marketData.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)[0].price_change_percentage_24h.toFixed(2)}%
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-400">Loading market highlights...</p>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* --- About Tab --- */}
                    <TabsContent value="about">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">🖋️ About Ledger Nexus</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    <strong>Ledger Nexus</strong> is a crypto wallet analysis and fraud detection application.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>Detects large Ethereum transactions and suspicious activities.</li>
                                    <li>Predicts fraudulent transactions using machine learning.</li>
                                </ul>
                                <p className="text-gray-300">
                                    <strong>Developed by:</strong> [Your Name]
                                </p>
                                <Alert className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Disclaimer</AlertTitle>
                                    <AlertDescription>
                                        This app is for educational/demo purposes. Always verify transactions manually!
                                    </AlertDescription>
                                </Alert>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default LedgerNexusApp;
