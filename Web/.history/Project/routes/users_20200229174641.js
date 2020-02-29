var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let dataArray=[
    {name:"An",age:12}
  ];
  res.json({
    data.dataArray
  })
});

module.exports = router;
