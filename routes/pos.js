</> JavaScript 
const express = require('express');
const router = express.Router();
const loyaltyService = require('../services/loyalty');

router.post('/transaction', async (req, res) => {
  try {
    const transaction = req.body; // { posId, userId, amount, items }
    const result = await loyaltyService.processTransaction(transaction);
    res.json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
