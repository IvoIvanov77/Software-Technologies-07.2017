const Product = require('../models/Product');

module.exports = {
	index: (req, res) => {
        Product.find().then(products => {
            res.render('product/index', {'products': products})
        });

    },

	createGet: (req, res) => {
        res.render('product/create');
	},

	createPost: (req, res) => {
        let productArgs = req.body;
        Product.create(productArgs).then(product =>{
            res.redirect('/');
        }).catch(err => {
            productArgs.error = "Cannot create product.";
            res.render('product/create', productArgs);
        });

    },

	editGet: (req, res) => {
        let id = req.params.id;
        Product.findById(id).then(product => {
            if(!product){
                res.redirect('/');
                return;
            }
            res.render('product/edit', product);
        }).catch(err => {
            res.redirect('/');
        });

    },
	editPost: (req, res) => {
        let id = req.params.id;
        let product = req.body;

        Product.findByIdAndUpdate(id, product, {runValidators: true})
            .then(product => {
                res.redirect('/');
            }).catch (err => {
            product.id = id;
            product.error = "Cannot edit product.";
            res.render('product/edit', product);
        });

    }
};