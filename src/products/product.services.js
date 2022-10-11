const productsControllers = require("./products.controller")
const { faker } = require('@faker-js/faker');

const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}
const postProduct = (data) => {
    return Products.create({
        id: faker.datatype.uuid(),
        ...data
    });
}
// const postProduct = (req, res) => {
//     const data = req.body;
//     if (data.name && data.category && data.price && data.isAvailable) {
//         productsControllers.createProduct(data)
//             .then(response => {
//                 res.status(201).json(response)
//             })
//             .catch(err => {
//                 res.status(400).json({message: err.message})
//             })
//     } else {
//         res.status(400).json({message : "Missing data"})
//     }
// }

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

const patchProductById = (req, res) => {
    const { name, category, price, isAvailable } = req.body;
    const { id } = req.params;

    if (id && (name || category || price || isAvailable)) {
        productsControllers.modifyProductById(id, req.body)
            .then(numberOfRowsModified => res.status(200).json({ status: true, message: `Modified ${numberOfRowsModified} rows` }))
            .catch(() => res.status(404).json({ status: false, message: 'Product does not exist' }));
    } else {
        res.status(400).json({ status: false, message: 'Invalid params' });
    }
}

const deleteProductById = (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ status: false, message: 'Invalid id' });
    } else {
        productsControllers.deleteProductById(req.params.id)
            .then(productsDeleted => res.status(200).json({ status: true, message: `Deleted ${productsDeleted} products` }))
            .catch(() => res.status(404).json({ status: false, message: 'Product does not exist' }));
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    patchProductById,
    deleteProductById
}