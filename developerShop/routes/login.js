let express = require('express');
let router = express.Router();
let loginController = require('../controllers/loginController');



router.get('/', loginController.index);


    module.exports = router;