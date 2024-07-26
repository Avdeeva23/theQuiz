const express = require('express')
const serverConfig = require('./config/serverConfig')
const app = express()
const indexRouter = require('./routes/api.routes')
const PORT = 3000


serverConfig(app)

app.use('/api', indexRouter)

app.listen(PORT, ()=>{
    console.log("Порт запущен");
})