let Joi = require('joi');
	
	let schema = Joi.object().keys({
     	firstname: Joi.string().optional(),
     	lastname: Joi.string().optional(),
     	password: Joi.string().regex(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,})/).optional()
	});

	let update = function(val, callback) {
		Joi.validate(val, schema, callback);		
	}

module.exports = update;