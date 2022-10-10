const productsControllers = require("./products.controller")

const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postProduct = (req, res) => {
    const data = req.body;
    if (data.name && data.category && data.price && data.isAvailable) {
        productsControllers.createProduct(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message : "Missing data"})
    }
}

const getProductById = (req, res) => {
    const id = req.params.id;

    productsControllers.getProductById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({message: err})
        })
}

module.exports = {
    getAllProducts,
    getProductById,
    postProduct
}