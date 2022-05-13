import mongoose from 'mongoose'
const { Schema } = mongoose
const restaurantSchema = new Schema({
	name: String,
	address: String,
	city: String,
	description: String,
	categories: String,
	imgUrl: String,
	email: String,
	hours: [String],
	star_rating: Number,
	price_category: Number,
})

//using the model method to declare model
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export default Restaurant
