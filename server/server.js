// server
'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./DB.js')
const itemRoutes = require('./expressRoutes/itemRoutes')

console.log(config.DB)

let options = {
  "server": {
    "socketOptions": {
      "keepAlive": 300000,
      "connectTimeoutMS": 30000
    }
  },
  "replset": {
    "socketOptions": {
      "keepAlive": 300000,
      "connectTimeoutMS": 30000
    }
  }
}
//mongoose.connect(config.DB);

mongoose.Promise = global.Promise;

// mongoose.connection.on('error', function (err) {
//   console.error('Database connection error:', err)
// })

// mongoose.connection.once('open', function () {
//   console.log('Database Connected')
// })

mongoose.connect(config.DB).then(
  () => {
    console.log('Database is Connected')
  },
  err => {
    console.log('Can not connect to the database ' + err)
  }
)

const app = express()
//
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
app.use('/items', itemRoutes)
// app.get('/', (req, res) => res.send('Hello World!'))
//
let port = process.env.PORT || 4000;

app.listen(port,function () {
  console.log(`Listening on port ${port}`)
})