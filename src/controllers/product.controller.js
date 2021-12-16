import Product from '../models/product'

export const index = async (_, res) => {
  const products = await Product.find().lean()
  res.render('product/index', {products})
}

export const show = async (req, res) => {
  const {id} = req.params
  const product = await Product.findById(id).lean()
  res.render('product/show', {product})
}

export const create = (req, res) => {
  res.render('product/create')
}

export const store = async (req, res) => {
  try {
    const {name, description, price} = req.body
    const images = req.files.map((file) => file.originalname)
    console.log(req.files)
    const product = new Product({name, description, price, images})
    await product.save()
    res.redirect('/products')
  } catch (err) {
    console.log(err)
  }
}

export const edit = async (req, res) => {
  try {
    const {id} = req.params
    const product = await Product.findById(id).lean()
    res.render('product/edit', {product})
  } catch(err) {
    console.error(err)
  }
}

export const update = async (req, res) => {
  try {
    const {id} = req.params
    await Product.findByIdAndUpdate(id, req.body)
    res.redirect('/products')
  } catch(err) {
    console.err(err)
  }
}

export const remove = async (req, res) => {
  try {
    const {id} = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
  } catch(err) {
    console.error(err)
  }
}