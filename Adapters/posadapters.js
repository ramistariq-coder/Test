function formatTransaction(transaction) {
  // Example: normalize POS-specific field names
  return {
    id: transaction.posId || transaction.id,
    userId: transaction.userId,
    amount: transaction.amount,
    items: transaction.items || [],
  };
}

module.exports = { formatTransaction };
