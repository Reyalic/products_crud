const uuid = require("uuid")
const Products = require("../models/products.models.js")

const getAllProducts = () => {
    const data = Products.findAll()

    return data
}

// getAllProducts()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
    return newProduct
}

// createProduct({
//     name: "Iphone 13",
//     category: "smartphones",
//     price: 1200,
//     isAvailable: true
// })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id: id
        }
    })
    return data
}
// getProductById("f9a2da70-4127-4f71-a18f-7fe8f34e7772")
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
}


