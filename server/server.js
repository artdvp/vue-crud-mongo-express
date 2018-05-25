// server
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
let port = process.env.PORT || 4000;

let server = app.listen(function () {
    console.log(`Listening on port ${port}`)
})