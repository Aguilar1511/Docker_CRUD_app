'use strict';

var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var DishSchema = new Schema(
	{
		dish_name: String,
		dish_description: String,
		allrestaurants: Array,
        dish_details: Array, 
	});

module.exports = mongoose.model('Dish',DishSchema);
