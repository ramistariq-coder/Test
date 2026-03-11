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
          Authorization: `Bearer ${process.env.BOOMERANG_API_KEY}`,
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
