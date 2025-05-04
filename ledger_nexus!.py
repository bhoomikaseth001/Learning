# import streamlit as st
# import requests
# import pandas as pd
# import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier
# import joblib
# import base64

# st.set_page_config(page_title="Ledger Nexus", layout="wide")

# # Function to encode image
# def get_base64_of_bin_file(bin_file):
#     with open(bin_file, 'rb') as f:
#         data = f.read()
#     return base64.b64encode(data).decode()

# def set_background(png_file):
#     bin_str = get_base64_of_bin_file(png_file)
#     page_bg_img = f"""
#     <style>
#     .stApp {{
#     background-image: url("data:image/png;base64,{bin_str}");
#     background-repeat: no-repeat;
#         background-position: center;
#         background-size: contain;
#         background-attachment: fixed;
#     }}
#     </style>
#     """
#     st.markdown(page_bg_img, unsafe_allow_html=True)

# # Set the background
# set_background('image.png')

# # Now the rest of your app
# st.title("Welcome to Ledger Nexus")
# st.write("Your app with a custom background 🎨✨")


# # ------------------ Functions (from your original code) ------------------

# def wei_to_ether(wei):
#     return int(wei) / 10**18

# def fetch_transactions(wallet_address, api_key):
#     url = f"https://api.etherscan.io/api?module=account&action=txlist&address={wallet_address}&sort=asc&apikey={api_key}"
#     response = requests.get(url)
#     data = response.json()
#     return data['result'] if data['status'] == '1' else []

# def detect_suspicious(transactions, threshold_eth=10):
#     suspicious = []
#     for tx in transactions:
#         value_eth = wei_to_ether(tx['value'])
#         if value_eth > threshold_eth:
#             suspicious.append({
#                 'From': tx['from'],
#                 'To': tx['to'],
#                 'Value (ETH)': round(value_eth, 4),
#                 'Txn Hash': tx['hash']
#             })
#     return pd.DataFrame(suspicious)

# # ------------------ Tabs ------------------

# tab1, tab2, tab3 = st.tabs(["Wallet Analysis", "Fraud Detection", "About App"])

# # ------------------ Wallet Analysis Tab ------------------
# with tab1:
#     st.header("📊 Analyze Ethereum Wallet Transactions")

#     wallet_col, api_col = st.columns(2)

#     with wallet_col:
#         wallet = st.text_input("Wallet Address")
#     with api_col:
#         api_key = st.text_input("Etherscan API Key", type="password")

#     threshold = st.number_input("Set Suspicious Threshold (in ETH)", min_value=0.1, value=10.0)

#     if st.button("Analyze Wallet"):
#         st.info("Fetching transaction data...")

#         try:
#             url = f"https://api.etherscan.io/api?module=account&action=txlist&address={wallet}&startblock=0&endblock=99999999&sort=asc&apikey={api_key}"
#             response = requests.get(url)
#             data = response.json()

#             if data['status'] != '1':
#                 st.error("Failed to fetch transactions. Check wallet address or API key.")
#             else:
#                 txs = data['result']
#                 df = pd.DataFrame(txs)
#                 df['value_eth'] = df['value'].astype(float) / (10**18)

#                 suspicious = df[df['value_eth'] >= threshold]

#                 st.success(f"Fetched {len(df)} transactions.")

#                 # Show suspicious transactions first
#                 st.subheader("🚨 Suspicious Transactions")
#                 if not suspicious.empty:
#                     st.dataframe(suspicious[['hash', 'from', 'to', 'value_eth', 'timeStamp']])
#                 else:
#                     st.info("No suspicious transactions found over threshold.")

#                 # All transactions inside an Expander
#                 with st.expander("See All Transactions"):
#                     st.dataframe(df[['hash', 'from', 'to', 'value_eth', 'timeStamp']])

#                 # Using your custom detection too
#                 if wallet and api_key:
#                     st.info("Further analyzing for suspicious activities...")
#                     txns = fetch_transactions(wallet, api_key)
#                     suspicious_df = detect_suspicious(txns, threshold)

#                     if not suspicious_df.empty:
#                         st.warning("Custom suspicious detection triggered!")
#                         st.dataframe(suspicious_df)
#                     else:
#                         st.success("No suspicious transactions detected using custom method.")
#                 else:
#                     st.error("Please enter both wallet and API key.")

#         except Exception as e:
#             st.error(f"Something went wrong: {e}")

# # ------------------ Fraud Detection Tab ------------------
# with tab2:
#     st.header("🚀 Predict Transaction Fraud")

#     # Training Sample Model (from your code)
#     data = {
#         'from': ['0x123...', '0x234...'],
#         'to': ['0xabc...', '0xdef...'],
#         'value': [12.5, 50.0],
#         'gas': [21000, 30000],
#         'timestamp': ['2025-04-01 12:00', '2025-04-02 14:00'],
#         'is_fraud': [0, 1]
#     }
#     df = pd.DataFrame(data)
#     X = df[['value', 'gas']]
#     y = df['is_fraud']

#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
#     model = RandomForestClassifier(n_estimators=100, random_state=42)
#     model.fit(X_train, y_train)
#     joblib.dump(model, 'fraud_detection_model.pkl')

#     model = joblib.load('fraud_detection_model.pkl')

#     # Columns for input
#     col_val, col_gas = st.columns(2)
#     with col_val:
#         value = st.number_input('Transaction Value (ETH)', min_value=0.01, value=1.0)
#     with col_gas:
#         gas = st.number_input('Gas Used', min_value=0, value=21000)

#     if st.button('Check for Fraud'):
#         input_data = np.array([[value, gas]])
#         prediction = model.predict(input_data)

#         if prediction[0] == 1:
#             st.error("⚠️ Suspicious Transaction Detected!")
#         else:
#             st.success("✅ Transaction Looks Normal")

# # ------------------ About Tab ------------------
# with tab3:
#     st.header("🖋 About Ledger Nexus")
#     st.markdown("""
#     - **Ledger Nexus** is a crypto wallet analysis and fraud detection app.
#     - Detects large Ethereum transactions and suspicious activities.
#     - Predicts fraudulent transactions using Machine Learning.

#     **Developed by:** [Your Name]
#     """)

#     st.info("Disclaimer: This app is for educational/demo purposes. Always verify transactions manually!")


# import streamlit as st
# import requests
# import pandas as pd
# import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier
# import joblib
# import base64
# import plotly.express as px  # For creating charts

# st.set_page_config(page_title="Ledger Nexus", layout="wide")

# # Function to encode image
# def get_base64_of_bin_file(bin_file):
#     with open(bin_file, 'rb') as f:
#         data = f.read()
#     return base64.b64encode(data).decode()

# def set_background(png_file):
#     bin_str = get_base64_of_bin_file(png_file)
#     page_bg_img = f"""
#     <style>
#     .stApp {{
#     background-image: url("data:image/png;base64,{bin_str}");
#     background-repeat: no-repeat;
#         background-position: center;
#         background-size: contain;
#         background-attachment: fixed;
#     }}
#     </style>
#     """
#     st.markdown(page_bg_img, unsafe_allow_html=True)

# # Set the background
# set_background('image.png')

# # ------------------ Functions (from your original code) ------------------

# def wei_to_ether(wei):
#     return int(wei) / 10**18

# def fetch_transactions(wallet_address, api_key):
#     url = f"https://api.etherscan.io/api?module=account&action=txlist&address={wallet_address}&sort=asc&apikey={api_key}"
#     response = requests.get(url)
#     data = response.json()
#     return data['result'] if data['status'] == '1' else []

# def detect_suspicious(transactions, threshold_eth=10):
#     suspicious = []
#     for tx in transactions:
#         value_eth = wei_to_ether(tx['value'])
#         if value_eth > threshold_eth:
#             suspicious.append({
#                 'From': tx['from'],
#                 'To': tx['to'],
#                 'Value (ETH)': round(value_eth, 4),
#                 'Txn Hash': tx['hash']
#             })
#     return pd.DataFrame(suspicious)

# # ------------------ Tabs ------------------

# tab1, tab2, tab3 = st.tabs(["Wallet Analysis", "Fraud Detection", "About App"])

# # --- Market Data Fetching Function ---
# @st.cache_data(ttl=60)  # Cache data for 60 seconds
# def fetch_market_data():
#     try:
#         url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
#         response = requests.get(url)
#         response.raise_for_status()  # Raise an exception for HTTP errors
#         data = response.json()
#         return pd.DataFrame(data)
#     except requests.exceptions.RequestException as e:
#         st.error(f"Error fetching market data: {e}")
#         return pd.DataFrame()

# # ------------------ Wallet Analysis Tab ------------------
# with tab1:
#     st.header("📊 Analyze Ethereum Wallet Transactions")
#     left_col, right_col = st.columns([2, 1])  # Adjust width ratio as needed

#     with left_col:
#         st.subheader("Ethereum Wallet Analysis Tools")
#         wallet_col, api_col = st.columns(2)

#         with wallet_col:
#             wallet = st.text_input("Wallet Address")
#         with api_col:
#             api_key = st.text_input("Etherscan API Key", type="password")

#         threshold = st.number_input("Set Suspicious Threshold (in ETH)", min_value=0.1, value=10.0)

#         if st.button("Analyze Wallet"):
#             st.info("Fetching transaction data...")

#             try:
#                 url = f"https://api.etherscan.io/api?module=account&action=txlist&address={wallet}&startblock=0&endblock=99999999&sort=asc&apikey={api_key}"
#                 response = requests.get(url)
#                 data = response.json()

#                 if data['status'] != '1':
#                     st.error("Failed to fetch transactions. Check wallet address or API key.")
#                 else:
#                     txs = data['result']
#                     df = pd.DataFrame(txs)
#                     df['value_eth'] = df['value'].astype(float) / (10**18)

#                     suspicious = df[df['value_eth'] >= threshold]

#                     st.success(f"Fetched {len(df)} transactions.")

#                     # Show suspicious transactions first
#                     st.subheader("🚨 Suspicious Transactions")
#                     if not suspicious.empty:
#                         st.dataframe(suspicious[['hash', 'from', 'to', 'value_eth', 'timeStamp']])
#                     else:
#                         st.info("No suspicious transactions found over threshold.")

#                     # All transactions inside an Expander
#                     with st.expander("See All Transactions"):
#                         st.dataframe(df[['hash', 'from', 'to', 'value_eth', 'timeStamp']])

#                     # Using your custom detection too
#                     if wallet and api_key:
#                         st.info("Further analyzing for suspicious activities...")
#                         txns = fetch_transactions(wallet, api_key)
#                         suspicious_df = detect_suspicious(txns, threshold)

#                         if not suspicious_df.empty:
#                             st.warning("Custom suspicious detection triggered!")
#                             st.dataframe(suspicious_df)
#                         else:
#                             st.success("No suspicious transactions detected using custom method.")
#                     else:
#                         st.error("Please enter both wallet and API key.")

#             except Exception as e:
#                 st.error(f"Something went wrong: {e}")

#     with right_col:
#         st.subheader("📈 Cryptocurrency Market Overview")
#         market_df = fetch_market_data()
#         if not market_df.empty:
#             st.write("Top 10 Cryptocurrencies by Market Cap:")
#             for index, row in market_df.iterrows():
#                 st.markdown(f"**{index + 1}. {row['name']} ({row['symbol'].upper()})**")
#                 st.metric("Price (USD)", f"${row['current_price']:.2f}", f"{row['price_change_percentage_24h']:.2f}% (24h)")
#                 # You can add more details here like market cap, volume, etc.

#             # Example of a simple price chart (requires more data points for a meaningful chart)
#             if not market_df.empty:
#                 fig = px.bar(market_df, x='symbol', y='current_price', title='Top 10 Crypto Prices')
#                 st.plotly_chart(fig, use_container_width=True)
#         else:
#             st.info("Market data is currently unavailable.")

# # ------------------ Fraud Detection Tab ------------------
# with tab2:
#     st.header("🚀 Predict Transaction Fraud")
#     left_col_fraud, right_col_fraud = st.columns([2, 1])

#     with left_col_fraud:
#         st.subheader("Fraud Detection Tool")
#         # Training Sample Model (from your code)
#         data = {
#             'from': ['0x123...', '0x234...'],
#             'to': ['0xabc...', '0xdef...'],
#             'value': [12.5, 50.0],
#             'gas': [21000, 30000],
#             'timestamp': ['2025-04-01 12:00', '2025-04-02 14:00'],
#             'is_fraud': [0, 1]
#         }
#         df = pd.DataFrame(data)
#         X = df[['value', 'gas']]
#         y = df['is_fraud']

#         X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
#         model = RandomForestClassifier(n_estimators=100, random_state=42)
#         model.fit(X_train, y_train)
#         joblib.dump(model, 'fraud_detection_model.pkl')

#         model = joblib.load('fraud_detection_model.pkl')

#         # Columns for input
#         col_val, col_gas = st.columns(2)
#         with col_val:
#             value = st.number_input('Transaction Value (ETH)', min_value=0.01, value=1.0)
#         with col_gas:
#             gas = st.number_input('Gas Used', min_value=0, value=21000)

#         if st.button('Check for Fraud'):
#             input_data = np.array([[value, gas]])
#             prediction = model.predict(input_data)

#             if prediction[0] == 1:
#                 st.error("⚠️ Suspicious Transaction Detected!")
#             else:
#                 st.success("✅ Transaction Looks Normal")

#     with right_col_fraud:
#         st.subheader("📈 Real-time Market Snippets")
#         market_df = fetch_market_data()
#         if not market_df.empty:
#             st.write("Current Market Highlights:")
#             top_gainer = market_df.sort_values(by='price_change_percentage_24h', ascending=False).iloc[0]
#             top_loser = market_df.sort_values(by='price_change_percentage_24h', ascending=True).iloc[0]

#             st.success(f"Top Gainer (24h): {top_gainer['name']} ({top_gainer['symbol'].upper()}) - +{top_gainer['price_change_percentage_24h']:.2f}%")
#             st.error(f"Top Loser (24h): {top_loser['name']} ({top_loser['symbol'].upper()}) - {top_loser['price_change_percentage_24h']:.2f}%")

#             # You could add more interesting market stats here.
#         else:
#             st.info("Market data is currently unavailable.")


# # ------------------ About Tab ------------------
# with tab3:
#     st.header("🖋 About Ledger Nexus")
#     st.markdown("""
#     - **Ledger Nexus** is a crypto wallet analysis and fraud detection app.
#     - Detects large Ethereum transactions and suspicious activities.
#     - Predicts fraudulent transactions using Machine Learning.

#     **Developed by:** [Your Name]
#     """)

#     st.info("Disclaimer: This app is for educational/demo purposes. Always verify transactions manually!")




import streamlit as st
import requests
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import base64
import plotly.express as px  # For creating charts

st.set_page_config(page_title="Ledger Nexus", layout="wide")

# Function to encode image
def get_base64_of_bin_file(bin_file):
    with open(bin_file, 'rb') as f:
        data = f.read()
    return base64.b64encode(data).decode()

def set_background(png_file):
    bin_str = get_base64_of_bin_file(png_file)
    page_bg_img = f"""
    <style>
    .stApp {{
    background-image: url("data:image/png;base64,{bin_str}");
    background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        background-attachment: fixed;
    }}
    </style>
    """
    st.markdown(page_bg_img, unsafe_allow_html=True)

# Set the background
set_background('image.png')

# ------------------ Functions (from your original code) ------------------

def wei_to_ether(wei):
    return int(wei) / 10**18

def fetch_transactions(wallet_address, api_key):
    url = f"https://api.etherscan.io/api?module=account&action=txlist&address={wallet_address}&sort=asc&apikey={api_key}"
    response = requests.get(url)
    data = response.json()
    return data['result'] if data['status'] == '1' else []

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

# --- Market Data Fetching Function ---
@st.cache_data(ttl=60)  # Cache data for 60 seconds
def fetch_market_data():
    try:
        url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        data = response.json()
        return pd.DataFrame(data)
    except requests.exceptions.RequestException as e:
        st.error(f"Error fetching market data: {e}")
        return pd.DataFrame()

# ------------------ Tabs ------------------

tab1, tab2, tab3 = st.tabs(["Wallet Analysis", "Fraud Detection", "About App"])

# ------------------ Wallet Analysis Tab ------------------
with tab1:
    st.header("📊 Analyze Ethereum Wallet Transactions")
    left_col, right_col = st.columns([2, 1])  # Adjust width ratio as needed

    with left_col:
        st.subheader("Ethereum Wallet Analysis Tools")
        wallet_col, api_col = st.columns(2)

        with wallet_col:
            wallet = st.text_input("Wallet Address")
        with api_col:
            api_key = st.text_input("Etherscan API Key", type="password")

        threshold = st.number_input("Set Suspicious Threshold (in ETH)", min_value=0.1, value=10.0)

        analyze_button = st.button("Analyze Wallet")

        if analyze_button and wallet and api_key:
            with st.spinner("Fetching transaction data..."):
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

                        st.subheader("🚨 Suspicious Transactions")
                        if not suspicious.empty:
                            st.dataframe(suspicious[['hash', 'from', 'to', 'value_eth', 'timeStamp']])
                        else:
                            st.info("No suspicious transactions found over threshold.")

                        with st.expander("See All Transactions"):
                            st.dataframe(df[['hash', 'from', 'to', 'value_eth', 'timeStamp']])

                        if wallet and api_key:
                            st.info("Further analyzing for suspicious activities...")
                            txns = fetch_transactions(wallet, api_key)
                            suspicious_df = detect_suspicious(txns, threshold)

                            if not suspicious_df.empty:
                                st.warning("Custom suspicious detection triggered!")
                                st.dataframe(suspicious_df)
                            else:
                                st.success("No suspicious transactions detected using custom method.")

                except Exception as e:
                    st.error(f"Something went wrong: {e}")
        elif analyze_button:
            st.warning("Please enter both wallet address and API key to analyze.")
        else:
            st.info("Enter a wallet address and Etherscan API key to begin analysis.")

    with right_col:
        st.subheader("📈 Cryptocurrency Market Overview")
        market_df = fetch_market_data()
        if not market_df.empty:
            st.write("Top 10 Cryptocurrencies by Market Cap:")
            for index, row in market_df.iterrows():
                st.markdown(f"**{index + 1}. {row['name']} ({row['symbol'].upper()})**")
                st.metric("Price (USD)", f"${row['current_price']:.2f}", f"{row['price_change_percentage_24h']:.2f}% (24h)")
                # You can add more details here like market cap, volume, etc.

            fig = px.bar(market_df, x='symbol', y='current_price', title='Top 10 Crypto Prices')
            st.plotly_chart(fig, use_container_width=True)
        else:
            st.info("Market data is currently unavailable.")

# ------------------ Fraud Detection Tab ------------------
with tab2:
    st.header("🚀 Predict Transaction Fraud")
    left_col_fraud, right_col_fraud = st.columns([2, 1])

    with left_col_fraud:
        st.subheader("Fraud Detection Tool")
        # Training Sample Model (from your code)
        data = {
            'from': ['0x123...', '0x234...'],
            'to': ['0xabc...', '0xdef...'],
            'value': [12.5, 50.0],
            'gas': [21000, 30000],
            'timestamp': ['2025-04-01 12:00', '2025-04-02 14:00'],
            'is_fraud': [0, 1]
        }
        df = pd.DataFrame(data)
        X = df[['value', 'gas']]
        y = df['is_fraud']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)
        joblib.dump(model, 'fraud_detection_model.pkl')

        model = joblib.load('fraud_detection_model.pkl')

        # Columns for input
        col_val, col_gas = st.columns(2)
        with col_val:
            value = st.number_input('Transaction Value (ETH)', min_value=0.01, value=1.0)
        with col_gas:
            gas = st.number_input('Gas Used', min_value=0, value=21000)

        if st.button('Check for Fraud'):
            input_data = np.array([[value, gas]])
            prediction = model.predict(input_data)

            if prediction[0] == 1:
                st.error("⚠️ Suspicious Transaction Detected!")
            else:
                st.success("✅ Transaction Looks Normal")
        else:
            st.info("Enter transaction details to check for potential fraud.")

    with right_col_fraud:
        st.subheader("📈 Real-time Market Snippets")
        market_df = fetch_market_data()
        if not market_df.empty:
            st.write("Current Market Highlights:")
            top_gainer = market_df.sort_values(by='price_change_percentage_24h', ascending=False).iloc[0]
            top_loser = market_df.sort_values(by='price_change_percentage_24h', ascending=True).iloc[0]

            st.success(f"Top Gainer (24h): {top_gainer['name']} ({top_gainer['symbol'].upper()}) - +{top_gainer['price_change_percentage_24h']:.2f}%")
            st.error(f"Top Loser (24h): {top_loser['name']} ({top_loser['symbol'].upper()}) - {top_loser['price_change_percentage_24h']:.2f}%")

            # You could add more interesting market stats here.
        else:
            st.info("Market data is currently unavailable.")

# ------------------ About Tab ------------------
with tab3:
    st.header("🖋 About Ledger Nexus")
    st.markdown("""
    - **Ledger Nexus** is a crypto wallet analysis and fraud detection app.
    - Detects large Ethereum transactions and suspicious activities.
    - Predicts fraudulent transactions using Machine Learning.

    **Developed by:** [Your Name]
    """)

    st.info("Disclaimer: This app is for educational/demo purposes. Always verify transactions manually!")