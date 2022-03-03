const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const conn = require('./db/conn')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log("App Iniciando na porta 3000")
})