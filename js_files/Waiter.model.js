'use strict';

var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var WaiterSchema = new Schema(
	{
		waiter_name: String,
		waiter_phone_number: Number,
		waiter_salary: Number,
        waiter_address: String, 
	});

module.exports = mongoose.model('Waiter',WaiterSchema);
