import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WalletAnalysis from './components/WalletAnalysis';
import FraudDetection from './components/FraudDetection';
import MarketOverview from './components/MarketOverview';
import AboutApp from './components/AboutApp';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={WalletAnalysis} />
                    <Route path="/fraud-detection" component={FraudDetection} />
                    <Route path="/market-overview" component={MarketOverview} />
                    <Route path="/about" component={AboutApp} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;