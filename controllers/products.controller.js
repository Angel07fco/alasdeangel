const productCtrl = {};

const Product = require('../models/Product')

productCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
};

productCtrl.getProduct = async(req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

productCtrl.createProduct = async (req, res) => {
    const { product, relleno, tamano1, tamano2, tamano3, details, estado, img, date } = req.body
    const newProduct = new Product({
        product,
        relleno,
        tamano1,
        tamano2,
        tamano3,
        details,
        estado,
        img,
        date
    });
    await newProduct.save();
    res.json({message: 'Product saved'})
};

productCtrl.updateProduct = async (req, res) => {
    const { product, relleno, tamano1, tamano2, tamano3, details, estado, img, date } = req.body
    const newProduct = await Product.findByIdAndUpdate(req.params.id, {
        product,
        relleno,
        tamano1,
        tamano2,
        tamano3,
        details,
        estado,
        img,
        date
    });
    await newProduct.save();
    res.json({message: 'Product Updated'});
};

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json({message: 'Product Deleted'});
};


module.exports = productCtrl;


