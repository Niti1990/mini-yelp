import express from 'express'
import {
	getAllRestaurants,
	getSingleRestaurant,
	createRestaurant,
	getRestaurantByKeyword,
} from '../controllers/restaurantController.js'

const router = express.Router()

//create route for CRUD operations at endpoint "Restaurants"
router.route('/').get(getAllRestaurants).post(createRestaurant)

//create route for CRUD operations at endpoint " for one Restaurant"
router.route('/:id').get(getSingleRestaurant)

//create route for CRUD operations at endpoint " for one Restaurantbyname"
router.route('/search/:keyword').get(getRestaurantByKeyword)

//export routes
export default router
