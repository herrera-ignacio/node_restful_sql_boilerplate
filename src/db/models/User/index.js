const { DataTypes, Model } = require('sequelize')
const { sequelizeClient } = require('../../drivers/sequelize-client')
const { Entity } = require('./entity')
const { setUserControllers } = require('./controllers')

class User extends Model {}

User.init(Entity(DataTypes), {
  sequelize: sequelizeClient,
  modelName: 'User'
})

setUserControllers(User)

module.exports.User = User
