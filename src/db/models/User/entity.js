module.exports.Entity = (DataTypes) => ({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})
