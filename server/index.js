const express = require('express')
const request = require('request')
const app = express()
const port = 3000



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get('/api/reviews', (req, res) => {
  request(`http://localhost:5002/api/reviews/${req.query.host}`, (err,response,body) => {
    res.send(JSON.parse(response.body))
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))