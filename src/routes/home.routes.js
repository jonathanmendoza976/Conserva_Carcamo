const router = require('express').Router()
const {home, about} = require('../controllers/home.controller')

router.get('/', home)
router.get('/about', about)

module.exports = router