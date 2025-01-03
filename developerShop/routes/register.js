let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    return res.send('registrate');})

    module.exports = router;