import Restaurant from '../models/Restaurant.js'

//find All Recipes
export const getAllRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find()
		res.status(200).json(restaurants)
	} catch (err) {
		res.status(500).json({ error: error.message })
	}
}
