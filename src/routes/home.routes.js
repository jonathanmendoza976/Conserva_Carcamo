import Express from 'express'
import {home, about} from '../controllers/home.controller'

const router = Express.Router()

router.get('/', home)
router.get('/about', about)

export default router