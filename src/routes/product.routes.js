import Express from 'express'
import {index, show, create, store, edit, update, remove} from '../controllers/product.controller'

const router = Express.Router()

router.get('/products', index)
router.get('/products/:id/show', show)
router.get('/products/create', create)
router.post('/products/create', store)
router.get('/products/:id/edit', edit)
router.post('/products/:id/edit', update)
router.post('/products/:id/delete', remove)

export default router