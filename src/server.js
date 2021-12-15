const path = require('path')
const express = require('express')
const {engine} = require('express-handlebars')

const app = express()

const port = process.env.PORT || 3000

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

if(process.env.NODE_ENV === 'development') {
  const morgan = require('morgan')
  app.use(morgan('dev'))
}

app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/home.routes'))

module.exports = app
