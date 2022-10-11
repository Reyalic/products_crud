const router = require("express").Router()

const productsServices = require("./product.services")


router.get("/", productsServices.getAllProducts)
router.post("/", productsServices.postProduct)

router.get("/:id", productsServices.getProductById)
router.patch('/:id', productsServices.patchProductById);
router.delete('/:id', productsServices.deleteProductById);

module.exports = router
