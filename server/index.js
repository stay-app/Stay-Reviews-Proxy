const express = require('express')
const request = require('request')
const app = express()
const port = 3000



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


app.get('/api/reviews', (req, res) => {
  request('http://localhost:5002/api/reviews', (err,response,body) => {
    console.log(body)
    // console.log(err)
    // console.log(response)
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))