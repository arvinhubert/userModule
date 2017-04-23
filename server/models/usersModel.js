let mongoose = require('mongoose');
let Schema = mongoose.Schema;
	mongoose.connect('mongodb://127.0.0.1:27017/users');
let validators = require('../validators/validator');

	
let User = new Schema({
	email:{
		type: String,
		unique: true,
		validate: {
          validator: validators.emailValidator,
          message: '{VALUE} is not a valid email!'
        },
        required: [true, 'email is required']
	},
	firstname: {
		type: String,
		required: 'firstname is required'
	},
	lastname: {
		type: String,
		required: 'lastname is required'		
	},
	password: {
		type: String,
		validate: {
          validator: validators.passwordValidator,
          message: '{VALUE} is not a valid password!'
        },
        required: [true, 'password is required']
	}

});

let updateUser = new Schema({

	firstname: {
		type: String,

	},
	lastname: {
		type: String,
		
	},
	password: {
		type: String,
		validate: {
          validator: validators.passwordValidator,
          message: '{VALUE} is not a valid password!'
        },
        required:  [true ]

	}

});
module.exports = mongoose.model('User', User);

