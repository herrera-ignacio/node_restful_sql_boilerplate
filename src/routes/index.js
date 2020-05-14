const userRouter = require('./User')

function setRoutes(app) {
  app.use('/users', userRouter)
}

module.exports.setRoutes = setRoutes