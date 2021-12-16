import path from 'path'
import cors from 'cors'
import Express from 'express'
import {engine} from 'express-handlebars'
import headers from './middlewares/headers'
import homeRoutes from './routes/home.routes'
import productRoutes from './routes/product.routes'
import './config/dotenv.config'
import './db'

// Initialize
const app = Express()
const port = process.env.PORT || 3000

// Settings
app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.engine(
  '.hbs',
  engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  })
)
app.set('view engine', '.hbs')

// Middleware
app.use(cors())
app.use(headers)
app.use(Express.static(path.join(__dirname, 'public')))

// Routes
app.use(homeRoutes)
app.use(productRoutes)

export default app
