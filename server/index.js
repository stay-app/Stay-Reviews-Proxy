const express = require('express')
const request = require('request')
const app = express()
const port = 3000 


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))