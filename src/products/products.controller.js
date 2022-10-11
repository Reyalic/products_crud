const { faker } = require('@faker-js/faker');
const Products = require("../models/products.models")

const getAllProducts = () => {
    const data = Products.findAll()

    return data
}

// getAllProducts()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const generateProducts = (length = 1) => {
    for (let i = 0; i < length; i++) {
        Products.create({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: parseInt(faker.commerce.price(100, 32000)),
            isAvailable: faker.datatype.boolean()
        })
            .then(() => { })
            .catch(console.error);
    }
}

// console.log('Creating products');
// generateProducts(80);


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

async function deleteProductById(id) {
    return Products.destroy({
        where: { id } 
    });
}

async function modifyProductById(id, data) {
    return Products.update(data, {
        where: { id }
    });
}

module.exports = {
    getAllProducts,
    getProductById,
    generateProducts,
    deleteProductById,
    modifyProductById
}


