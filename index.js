import express from 'express'
import 'dotenv/config'
import './db/client.js'
import router from './routes/restaurant.js'
import cors from 'cors'

//defining the port
const port = process.env.PORT || 9000
const app = express()
app.use(cors())
app.use(express.json())

//creating the initial route
app.get('/', (req, res) => {
	console.log('Home Page')
	res.send('Connecting your MongoDB database with mongoose!')
})

////appending the restaurant route
app.use('/restaurants', router)

//listen to port
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
