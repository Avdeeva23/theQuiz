const router = require('express').Router()

const homeRouter = require("./home.routes") 
const questionRouter = require("./question.routes")
const ratingRouter = require("./rating.routes")
 router.use('/', homeRouter)
 router.use('/question', questionRouter)
 router.use('/rating', ratingRouter)

module.exports = router