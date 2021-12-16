import Express from 'express'
import {uploadImages} from '../middlewares/multer'
import {index, show, create, store, edit, update, remove} from '../controllers/product.controller'

const router = Express.Router()

router.get('/products', index)
router.get('/products/:id/show', show)
router.get('/products/create', create)
router.post('/products/create', uploadImages('images'), store)
router.get('/products/:id/edit', edit)
router.post('/products/:id/edit', update)
router.post('/products/:id/delete', remove)

export default router