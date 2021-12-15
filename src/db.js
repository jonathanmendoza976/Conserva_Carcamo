import {connect} from 'mongoose'

;(async () => {
  try {
    const db = await connect(process.env.DATABASE_URL)
    console.log(`Connected to MongoDB to ${db.connection.name}`)
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error}`)
  }
})()