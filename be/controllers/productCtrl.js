const Products = require('../models/productModel');

const productCtrl = {
    getAllProducts: async(req, res) => {
        try {
            const products = await Products.find();
            res.json(products);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getFavoriteProducts: async(req, res) => {
        try {
            const products = await Products.find().sort({ sold: -1 }).limit(4);
            res.json(products);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getOneProduct: async(req, res) => {
        try {
            const product = await Products.find({ _id: req.params.id });
            res.json(product[0]);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    createProduct: async(req, res) => {
        try {
            const { name, description, price, images, category, sold, amount } =
            req.body;
            const newProduct = new Products({
                name,
                description,
                price,
                images,
                category,
                sold,
                amount,
            });
            await newProduct.save();
            res.json(newProduct);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updateProduct: async(req, res) => {
        try {
            const { id } = req.params;

            const product = await Products.findOne({ _id: id });
            if (!product)
                return res.status(400).json({ msg: 'Product not found' });

            await Products.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ msg: 'Product updated' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    deleteProduct: async(req, res) => {
        try {
            const { id } = req.params;
            const product = await Products.findOne({ _id: id });
            if (!product)
                return res.status(400).json({ msg: 'Product not found' });
            await Products.findByIdAndDelete(id);
            res.json({ msg: 'Product deleted' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    filterProduct: async(req, res) => {
        try {
            const { productName } = req.body;
            const query = new RegExp(productName, 'i');
            const products = await Products.find({
                name: query,
            });
            res.json(products);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = productCtrl;