const express = require('express')
const app = express()
const port = 8080
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/blog/list', (req, res) => {
  fs.readFile('./src/source/blogs.json', (err, data) => {
    if (err) {
      throw err
    }
    const readResult = JSON.parse(data)
    console.log(readResult)
    res.send(readResult)
  })
})

app.post('/api/blog/new', (req, res) => {
  const params = req.body

  fs.readFile('./src/source/blogs.json', (err, data) => {
    if (err) {
      throw err
    }
    const readResult = JSON.parse(data)
    readResult.push(params)
    fs.writeFileSync('./src/source/blogs.json', JSON.stringify(readResult))
    res.send(true)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// todo connect to DB
