const router = require("express").Router()

const productsServices = require("./product.services")


router.get("/", productsServices.getAllProducts)
router.post("/", productsServices.postProduct)

router.get("/:id", productsServices.getProductById)
// router.delete("/:id")
// router.patch("/:id")
// router.put("/:id")

module.exports = router
