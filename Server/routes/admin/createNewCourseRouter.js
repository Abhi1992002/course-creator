var express = require('express');
var router = express.Router();

const authorization = require('../../middleware/authorization')

router.get('/',authorization,async function(req, res, next) {

});

module.exports = router;
