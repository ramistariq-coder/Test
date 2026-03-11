</> JavaScript 
 
const axios = require('axios');

async function sendPointsToBoomerang(customerPhone, points) {
  try {
    const response = await axios.post('https://api.boomerangme.com/points', {
      phone: customerPhone,
      points: points
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.514549a214088236d275fd6afcbbe9f8}`
      }
    });
    console.log('Boomerang response:', response.data);
  } catch (err) {
    console.error('Error sending points:', err.message);
  }
}

module.exports = { sendPointsToBoomerang };
