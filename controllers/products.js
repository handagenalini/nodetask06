const products = [];

exports.getaddproducts=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
exports.postaddproducts=(req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
}
exports.getproducts=(req, res, next) => {
    // const products = adminData.products;
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }