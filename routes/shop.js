const path = require('path');

const express = require('express');

const productcontroller=require('../controllers/products')

const router = express.Router();

router.get('/',productcontroller.getproducts);

module.exports = router;