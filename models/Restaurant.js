import mongoose from 'mongoose'
const { Schema } = mongoose
const restaurantSchema = new Schema({
	name: String,
	city: String,
	description: String,
	address: String,
	phone: String,
	email: String,
	opening_hours: String,
	closing_hours: String,
	star_rating: Number,
	price_category: Number,
})

//using the model method to declare model
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export default Restaurant
