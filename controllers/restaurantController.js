import Restaurant from '../models/Restaurant.js'

//find All Restaurants
export const getAllRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find()
		res.status(200).json(restaurants)
	} catch (err) {
		res.status(500).json({ error: error.message })
	}
}

// find single restaurant by id
export const getSingleRestaurant = async (req, res) => {
	try {
		const { id } = req.params
		const singleRestaurant = await Restaurant.findById(id)
		res.status(200).json(singleRestaurant)
		console.log(singleRestaurant)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
//find by name
export const getRestaurantByKeyword = async (req, res) => {
	try {
		const { keyword } = req.params
		const restaurant = await Restaurant.find({
			name: { $regex: keyword, $options: '$i' },
		})

		await res.json(restaurant)
	} catch (error) {
		res.status(500).send('Error getting restaurant')
	}
}

//create
export const createRestaurant = async (req, res) => {
	try {
		const { name, address, city, description, categories } = req.body
		const newRestaurant = await Restaurant.create({
			name,
			address,
			city,
			description,
			categories,
		})
		res.status(201).json(newRestaurant)
		console.log(newRestaurant)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
