const router = require('express').Router()

const homeRouter = require("./home.routes") 
const ratingRouter = require("./rating.routes")
 router.use('/', homeRouter)
 router.use('/rating', ratingRouter)

module.exports = router