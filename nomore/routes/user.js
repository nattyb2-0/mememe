const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.send('in user route ...get');
})


module.exports = router;
