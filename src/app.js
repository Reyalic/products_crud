const express = require("express");

const db = require("./utils/database")
const initModels = require("./models/initModels")
const { port } = require("./config")
const productsRouter = require("./products/product.router")

const app = express()

db.authenticate()
    .then(() => console.log("DB Authentication Successfully"))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log("Database synced"))
    .catch(er => console.log(err))

initModels()


app.use(express.json())

app.get("/", (req, res) => {
    res.status(200),json({message: "OK!"})
})

app.use("/products", productsRouter)

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})