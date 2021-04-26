const express = require('express')
const bodyParser = require('body-parser')
const ProductsRouter = require('./routes/products')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/products', ProductsRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('started listening on 3000')
})
