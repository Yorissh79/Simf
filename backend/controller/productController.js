import productModel from "../models/productModel.js"

const getProduct = async (req, res) => {
    const product = await productModel.find()
    res.json(product)
}

const postProduct = async (req, res) => {
    const { name, title, image } = req.body
    const product = { name, title, image }
    await productModel.create(product)
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    await productModel.findByIdAndDelete(id)
    res.json(id)
}

export { getProduct, postProduct, deleteProduct }