const { app } = require('./app')
const { db } = require('./db')
const { PORT } = process.env

const start = () => db.client.authenticate()
  .then(() => {
    console.log('Connecting to Database... OK!')
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
  })
  .catch((err) => {
    console.log('Error connecting to database, retrying in 5 seconds...')
    console.log(`Details: ${err.message}`)
    setTimeout(() => start(), 5000)
  })

start()