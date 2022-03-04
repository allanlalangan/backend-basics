const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, (req, res) => {
  console.log('hello world')
})

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})
