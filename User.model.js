'use strict';

var mongoose= require('mongoose');


var userSchema = new mongoose.Schema({
	username:{
        type: string,
        require: [true,'User must have a username'],
        unique: true,

    },
    password: {
        type: string,
        require:[true,"User must have a password"]
    }
	
});

module.exports = mongoose.model('User',UserSchema);
