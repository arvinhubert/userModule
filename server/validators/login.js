let Joi = require('joi');
	
	let schema = Joi.object().keys({
     	email: Joi.string().email().required(),
     	password: Joi.string().regex(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,})/).required()
	});

	let login = function(val, callback) {
		Joi.validate(val, schema, callback);		
	}

module.exports = login;