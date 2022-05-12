import express from 'express'
import { getAllRestaurants } from '../controllers/restaurantController.js'

const router = express.Router()

//create route for CRUD operations at endpoint "Restaurants
router.route('/').get(getAllRestaurants)

//export routes
export default router
