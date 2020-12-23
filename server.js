const express = require('express')
const seveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname,'/dist')))

const port = process.env.PORT || 8080
app.listen(port)