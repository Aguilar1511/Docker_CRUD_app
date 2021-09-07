'use strict';

var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var RestaurantsSchema = new Schema(
	{
		restaurant_name: String,
		restaurant_email: String,
		restaurant_address: String,
        restaurant_contact_number: Number,
        allwaiters: Array,
        alldishes: Array,
        clients_list: Array
	});

module.exports = mongoose.model('Restaurants',RestaurantsSchema);
