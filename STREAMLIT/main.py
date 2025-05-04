import streamlit as st

st.title("Hi!! I am Streamlit Web App")
st.header("HI! I am your header")
st.title("Uploading Files")
st.markdown("---")
image=st.file_uploader("Please upload an image", type=["png","jpg","jpeg"])
if image is not None:
    st.image(image)
val=st.text_area("Description")
print(val)
