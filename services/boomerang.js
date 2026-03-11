</> JavaScript 
 
const axios = require('axios');

async function sendPointsToBoomerang(customerPhone, points) {
  try {
    const response = await axios.post('https://api.boomerangme.com/points', {
      phone: customerPhone,
      points: points
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.BOOMERANG_API_KEY}`
      }
    });
    console.log('Boomerang response:', response.data);
  } catch (err) {
    console.error('Error sending points:', err.message);
  }
}

module.exports = { sendPointsToBoomerang };
