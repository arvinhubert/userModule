
let validators = (function(){

	let emailValidator = function(value) {
	    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
	};

	let passwordValidator = function(value){

		return /((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,})/.test(value)
	}
	return{
		emailValidator,
		passwordValidator
	}
})();
module.exports = validators;