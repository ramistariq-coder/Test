</> JavaScript
const axios = require('axios');

async function sendPurchaseToBoomerang(customerPhone, amount) {
  try {
    const response = await axios.post(
      'https://api.boomerangme.com/purchase',
      {
        phone: customerPhone,
        amount: amount
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.514549a214088236d275fd6afcbbe9f8}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Boomerang response:', response.data);
    return response.data;

  } catch (err) {
    console.error('Error sending purchase:', err.response?.data || err.message);
  }
}

module.exports = { sendPurchaseToBoomerang };
