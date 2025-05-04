import streamlit as st
import requests
import pandas as pd

st.write("🔥 App Started!")


# Convert Wei to Ether
def wei_to_ether(wei):
    return int(wei) / 10**18

# Fetch transactions from Etherscan
def fetch_transactions(wallet_address, api_key):
    url = f"https://api.etherscan.io/api?module=account&action=txlist&address={wallet_address}&sort=asc&apikey={api_key}"
    response = requests.get(url)
    data = response.json()
    return data['result'] if data['status'] == '1' else []

# Detect suspicious transactions
def detect_suspicious(transactions, threshold_eth=10):
    suspicious = []
    for tx in transactions:
        value_eth = wei_to_ether(tx['value'])
        if value_eth > threshold_eth:
            suspicious.append({
                'From': tx['from'],
                'To': tx['to'],
                'Value (ETH)': round(value_eth, 4),
                'Txn Hash': tx['hash']
            })
    return pd.DataFrame(suspicious)

# Streamlit UI
st.title("LEDGER NEXUS")
st.write("Enter an Ethereum wallet to detect large transactions.")

wallet = st.text_input("Wallet Address")
api_key = st.text_input("Etherscan API Key", type="password")

if st.button("Analyze wallet"):
    import requests
    import pandas as pd

    st.info("Fetching transaction data...")
 
    try:
        url = f"https://api.etherscan.io/api?module=account&action=txlist&address={wallet}&startblock=0&endblock=99999999&sort=asc&apikey={api_key}"
        response = requests.get(url)
        data = response.json()

        if data['status'] != '1':
            st.error("Failed to fetch transactions. Check wallet address or API key.")
        else:
            txs = data['result']
            df = pd.DataFrame(txs)
            df['value_eth'] = df['value'].astype(float) / (10**18)

            suspicious = df[df['value_eth'] >= threshold]

            st.success(f"Fetched {len(df)} transactions.")
            st.write("📋 All Transactions:", df[['hash', 'from', 'to', 'value_eth', 'timeStamp']].head(10))
            st.write("🚨 Suspicious Transactions:", suspicious[['hash', 'from', 'to', 'value_eth', 'timeStamp']])
    except Exception as e:
        st.error(f"Something went wrong: {e}")

    if wallet and api_key:
        st.info("Fetching data...")
        txns = fetch_transactions(wallet, api_key)
        suspicious_df = detect_suspicious(txns)

        if not suspicious_df.empty:
            st.warning("Suspicious transactions found!")
            st.dataframe(suspicious_df)
        else:
            st.success("No suspicious transactions detected.")
    else:
        st.error("Please enter both wallet and API key.")

threshold = st.number_input("Set Suspicious Threshold (in ETH)", min_value=0.1, value=10.0)

import streamlit as st
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import numpy as np

# Sample data for training (you can replace this with actual data or CSV)
data = {
    'from': ['0x123...', '0x234...'],
    'to': ['0xabc...', '0xdef...'],
    'value': [12.5, 50.0],
    'gas': [21000, 30000],
    'timestamp': ['2025-04-01 12:00', '2025-04-02 14:00'],
    'is_fraud': [0, 1]  # 0 - Normal, 1 - Fraud
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Features (X) and Labels (y)
X = df[['value', 'gas']]  # Just using value and gas for simplicity
y = df['is_fraud']  # Fraud labels

# Split data into training and test sets (80% training, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the trained model for later use
joblib.dump(model, 'fraud_detection_model.pkl')

# Load the trained model (usually done at the start in production)
model = joblib.load('fraud_detection_model.pkl')

# Streamlit UI
st.title('Ledger Nexus - Crypto Fraud Detection')

# Input fields for new transaction
value = st.number_input('Transaction Value (ETH)', min_value=0.01, value=1.0)
gas = st.number_input('Gas Used', min_value=0, value=21000)

# Predict when the user submits the transaction details
if st.button('Check for Fraud'):
    input_data = np.array([[value, gas]])  # New transaction features
    prediction = model.predict(input_data)

    if prediction[0] == 1:
        st.error("⚠️ Suspicious Transaction Detected!")
    else:
        st.success("✅ Transaction Looks Normal")
