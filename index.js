const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const sellersRouter = require('./routes/sellers')
const customersRouter = require('./routes/customers')
const ordersRouter = require('./routes/orders')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'pug')

app.use('/products', productsRouter)
app.use('/sellers', sellersRouter)
app.use('/customers', customersRouter)
app.use("/orders", ordersRouter)


app.use('/', indexRouter)

module.exports = app