'use strict';

var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema(
	{
		order_date: Date,
		order_value: Number,
		order_status: String,
        dish_details: Array, 
	});

module.exports = mongoose.model('Order',OrderSchema);
