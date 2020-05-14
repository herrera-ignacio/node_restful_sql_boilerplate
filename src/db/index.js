const { sequelizeClient } = require('./drivers/sequelize-client')
const { loadModels, createAssociations } = require('./drivers/sequelize-init')

const models = [
  { name: 'User', model: require('./models/User') }
]

const db = {}

loadModels(models, db)
createAssociations(db)

db.client = sequelizeClient
db.client.sync()

module.exports.db = db