const express = require('express')
const bodyParser = require('body-parser')
const productsRouter = require('./routes/products')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/products', productsRouter)

app.listen(3000, () => {
  console.log('started listening on 3000')
})
