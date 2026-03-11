const axios = require("axios");

async function processSale(data){

 const points = Math.floor(data.total_amount);

 console.log("Customer earned points:", points);

 // Example Boomerang API call
 /*
 await axios.post("https://api.boomerangme.com/points",{
   phone:data.customer_phone,
   points:points
 });
 */

}

module.exports = processSale;
