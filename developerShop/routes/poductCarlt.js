let express = require('express');
let router = express.Router();


router.get('/', function(req, res) {
    return res.send('GET HTTP method on user resource');})


    module.exports = router;