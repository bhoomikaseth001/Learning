function weiToEther(wei) {
    return parseFloat(wei) / Math.pow(10, 18);
}

export { weiToEther };