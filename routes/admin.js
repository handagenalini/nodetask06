const path = require('path');

const express = require('express');

const addproductscontroller=require('../controllers/products.js')
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', addproductscontroller.getaddproducts) 
  

// /admin/add-product => POST
router.post('/add-product',addproductscontroller.postaddproducts);

exports.routes = router;
exports.products = products;
