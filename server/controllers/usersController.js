let usersModel = require('../models/usersModel');
let loginValidator = require('../validators/login');
let updateValidator = require('../validators/update');



let usersController =(function() {
	
	let _users = [];

	let createUser = function(request, response){
		let newUser = new usersModel(request.body);
		newUser.save(function(err, user) {

			if(!err){
				response.status(200)
					.send({data:user})
			}
			else{
				response.status(401)
					.send({ 
						error: err.message
						
					})	
			}
			
		});		

		
	}

	let login = function(request, response){
		let param = {
			email:request.body.email, 
			password:request.body.password
		};
		loginValidator(param, function(err, value){
			if(err == null){
				usersModel.findOne(param , '_id', function(error, userID){
					if(userID){
						response.status(200).send({data:userID})

					}
					else{

						response.status(401)
							.send({ 
								"error": "email or password is incorrect"
						})							
					}
				});				
			}
			else{
				response.status(401)
					.send({ 
						"error": err.message
				})				
			}

			
		})

		
	}


	let updateUser = function(request, response){
		
		let param = {
			password:request.body.password,
			firstname:request.body.firstname,
			lastname:request.body.lastname
		};

		updateValidator(param, function(error, value){
			if(error == null){

				usersModel.findOneAndUpdate( {"_id":request.params.id} , param , {}, function(err, user){
					
					
					if(user){
						response.status(200).send({data:user})						
					}
					else{

						response.status(401).send({"error":err.message})		
					}
				
				});								
			}
			else{

				response.status(401).send({"error":err.message})
			}
		})

		
	}




	return{
		createUser,
		login,
		updateUser
	}
})();


module.exports = usersController;