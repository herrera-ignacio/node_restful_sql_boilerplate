const { setCreateControllers } = require('./create')
const { setReadControllers } = require('./read')
const { setUpdateControllers } = require('./update')
const { setDeleteControllers } = require('./delete')

module.exports.setUserControllers = (User) => {
  setCreateControllers(User)
  setReadControllers(User)
  setUpdateControllers(User)
  setDeleteControllers(User)
}