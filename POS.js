const express = require("express");
const router = express.Router();

const processSale = require("../services/boomerang");

router.post("/sale", async (req,res)=>{

 const saleData = req.body;

 console.log("POS Sale Received", saleData);

 await processSale(saleData);

 res.json({
   status:"processed"
 });

});

module.exports = router;
