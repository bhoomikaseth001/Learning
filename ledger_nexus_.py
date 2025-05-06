# import streamlit as st

# # Set page config
# st.set_page_config(layout="wide", page_title="Ledger Nexus Dashboard")

# # Custom CSS for dark theme and layout
# st.markdown("""
#     <style>
#         body {
#             background-color: #111827;
#             color: white;
#         }
#         .main {
#             background-color: #111827;
#         }
#         .sidebar .sidebar-content {
#             background-color: #1f2937;
#         }
#         .sidebar .sidebar-content * {
#             color: white;
#         }
#         .topbar {
#             padding: 1rem 2rem;
#             background-color: #1f2937;
#             border-bottom: 1px solid #374151;
#             display: flex;
#             justify-content: space-between;
#             align-items: center;
#         }
#         .topbar h1 {
#             margin: 0;
#             font-size: 1.5rem;
#             color: white;
#         }
#         .card {
#             background-color: #1f2937;
#             border-radius: 10px;
#             padding: 1rem;
#             box-shadow: 0 0 10px rgba(0,0,0,0.3);
#         }
#         .icon-box {
#             background-color: #374151;
#             padding: 0.8rem;
#             border-radius: 8px;
#             text-align: center;
#         }
#     </style>
# """, unsafe_allow_html=True)

# # Sidebar navigation
# st.sidebar.markdown("### Navigation")
# st.sidebar.markdown("🔐 Wallet")
# st.sidebar.markdown("📊 Analytics")
# st.sidebar.markdown("🧾 Transactions")
# st.sidebar.markdown("👤 Profile")
# st.sidebar.markdown("⚙️ Settings")

# # Top bar
# st.markdown("""
#     <div class="topbar">
#         <h1>Ledger Nexus</h1>
#         <div>
#             🛠️ ⚙️ 👤
#         </div>
#     </div>
# """, unsafe_allow_html=True)

# # Main content
# col1, col2, col3 = st.columns(3)

# with col1:
#     st.markdown('<div class="card"><h3>💰 Wallet Balance</h3><p>$14,250.00</p></div>', unsafe_allow_html=True)

# with col2:
#     st.markdown('<div class="card"><h3>📈 Monthly Revenue</h3><p>$3,890.00</p></div>', unsafe_allow_html=True)

# with col3:
#     st.markdown('<div class="card"><h3>🧾 Transactions</h3><p>+23 new</p></div>', unsafe_allow_html=True)

# # Charts/analytics placeholder
# st.markdown("## Analytics Overview")
# st.markdown('<div class="card"><p>[Insert chart or graph here]</p></div>', unsafe_allow_html=True)

# # Transactions section
# st.markdown("## Recent Transactions")
# st.markdown('<div class="card"><ul><li>+ $500 - Deposit</li><li>- $200 - Withdrawal</li><li>+ $50 - Cashback</li></ul></div>', unsafe_allow_html=True)




import streamlit as st
import matplotlib.pyplot as plt
import plotly.graph_objects as go

# Set page configuration
st.set_page_config(page_title="Ledger Nexus", layout="wide")

# Custom styling
st.markdown("""
    <style>
    /* Full dark theme */
    .main {
        background-color: #0f172a;
        color: white;
    }
    /* Sidebar styling */
    .css-1d391kg {  /* Streamlit sidebar container class */
        background-color: #111827 !important;
    }
    .sidebar-title {
        font-size: 24px;
        color: #60a5fa;
        font-weight: bold;
        margin-top: 10px;
    }
    .sidebar-item {
        font-size: 18px;
        margin: 20px 0;
        color: #cbd5e1;
    }
    .stButton>button {
        background-color: #3b82f6;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        padding: 10px 20px;
        transition: all 0.3s ease;
    }
    .stButton>button:hover {
        background-color: #2563eb;
        transform: scale(1.02);
    }
    .info-box {
        background-color: #1e293b;
        padding: 1.5em;
        border-radius: 10px;
        text-align: center;
    }
    </style>
""", unsafe_allow_html=True)

# Sidebar with logo, title, and nav
with st.sidebar:
    st.image("image.png", width=60)  # Replace with your own logo
    st.markdown("<div class='sidebar-title'>LEDGER<br>NEXUS</div>", unsafe_allow_html=True)
    st.markdown("<div class='sidebar-item'>🏠 Home</div>", unsafe_allow_html=True)
    st.markdown("<div class='sidebar-item'>📄 Documentation</div>", unsafe_allow_html=True)

# Main content
st.markdown("<h1 style='color:#60a5fa;'>Ledger Nexus</h1>", unsafe_allow_html=True)
st.markdown("### 🤖 AI-Powered Crypto Transaction Monitoring")
st.markdown("---")

# Wallet section
wallet_address = st.text_input("🔐 Wallet Address", placeholder="Enter Ethereum wallet address")
st.button("🛰️ Monitor")

# Threshold
threshold = st.slider("🚨 Set Suspicious Threshold (in ETH)", min_value=1, max_value=10, value=6)

# Check Transactions
st.button("🔍 Check Transactions")

# Stats columns
col1, col2 = st.columns(2)

with col1:
    st.markdown("<div class='info-box'><h3>🕵️‍♂️ Suspicious Transactions</h3><h1 style='color:#f87171;'>0</h1></div>", unsafe_allow_html=True)

with col2:
    # Responsive Plotly Donut Chart
    labels = ['Suspicious', 'Safe']
    values = [30, 102]
    colors = ['#ef4444', '#3b82f6']

    fig = go.Figure(data=[go.Pie(
        labels=labels,
        values=values,
        hole=0.6,
        marker=dict(colors=colors),
        textinfo='none'
    )])

    fig.update_layout(
        margin=dict(t=0, b=0, l=0, r=0),
        height=None,
        width=None,
        paper_bgcolor='rgba(0,0,0,0)',
        plot_bgcolor='rgba(0,0,0,0)',
    )

    st.plotly_chart(fig, use_container_width=True)
    st.markdown("<h1 style='text-align:center; color:#facc15;'>132</h1>", unsafe_allow_html=True)
    st.markdown("</div>", unsafe_allow_html=True)

# Status message
st.success("✅ No suspicious transactions detected")
