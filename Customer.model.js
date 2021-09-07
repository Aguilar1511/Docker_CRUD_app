'use strict';

var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema(
	{
		customer_name: String,
		customer_email: String,
		customer_address: String,
        customer_contact_number: Number,
        allorders: Array,
        visits_restro: Array,

	});

module.exports = mongoose.model('Customer',CustomerSchema);
