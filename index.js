const express = require('express')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const sellersRouter = require('./routes/sellers')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/products', productsRouter)
app.use('/sellers', sellersRouter)

app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('started listening on 3000')
})

module.exports = app
