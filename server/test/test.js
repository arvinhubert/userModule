let supertest = require("supertest");
let should = require("should");
let server = supertest.agent("http://localhost:3000");

describe("User Mocha test",function(){


	describe("POST/users/create/ Given valid parameters",function(){
	  	it('should create new user', function (done) {
	        let params = {
	          firstname: 'bobby',
	          lastname: 'yap',
	          email: 'bobbyyap'+Math.random()+'@gmail.com',
	          password: 'dA1.dgfv'
	        };

	      	server
	          	.post('/users/create')
	          	.send(params)
	          	.expect(200)
	          	.expect("Content-type",/json/)
	          	.expect(res => {
	            	expect(res.body.data).to.has.property('_id');
	          	})
	          	.end(function(err,res){
			      	res.status.should.equal(200);   
			      	done();
		    	})
	  	});

	})

	describe("POST/users/create/ Given NOT valid parameters",function(){
	  	it(' should not create new user', function (done) {
	        let params = {
	          firstname: 'bobby',
	          lastname: 'yap',
	          email: 'bobbyya.com',
	          password: 'dA1!dgfA'
	        };

	      	server
	          	.post('/users/create')
	          	.send(params)
	          	.expect(401)
	          	.expect("Content-type",/json/)
	          	.expect(res => {
	            	expect(res.body).to.has.property('error');
	          	})
	          	.end(function(err,res){
			      	res.status.should.equal(401);   
			      	done();
		    	})
	  	});

	})


  	describe("POST/users/login/ Given valid parameters",function(){
	  	it(' should return _id', function (done) {
	        let params = {
	          email: 'leaashley@steelfab.com',
	          password: 'Lea1.Ashley'
	        };

	      	server
	          	.post('/users/login')
	          	.send(params)
	          	.expect(200)
	          	.expect("Content-type",/json/)
	          	.expect(res => {
	            	expect(res.body.data).to.has.property('_id');
	          	})
	          	.end(function(err,res){
			      	res.status.should.equal(200);   
			      	done();
		    	})
	  	});

  	})
  	describe("POST/users/login/ Given NOT valid parameters",function(){
	  	it( ' should not return _id', function (done) {
	        let params = {
	          email: 'bobbyyzaap@gmail.com',
	          password: 'dA1!dgfa'
	        };

	      	server
	          	.post('/users/login')
	          	.send(params)
	          	.expect(401)
	          	.expect("Content-type",/json/)
	          	.expect(res => {
	            	expect(res.body).to.has.property('error');
	          	})
	          	.end(function(err,res){
			      	res.status.should.equal(401);   
			      	done();
		    	})
	  	}); 

  	})
 


  	/* UPDATE USER*/
 	describe("patch/users/update/:id/ Given valid parameters",function(){
	  	it(' UPDATE should return _id', function (done) {
	        let params = {
	          firstname: 'JarvisNew',
	          lastname: 'CastanedaNew',
	          password: 'Jarvis1.Castaneda'
	        };

	      	server
	          	.patch('/users/update/58fbf1c3300745361f6c7f11')
	          	.send(params)
	          	.expect(200)
	          	.expect("Content-type",/json/)
	          	.expect(res => {
	            	expect(res.body.data).to.has.property('_id');
	            	res.body.data._id.notEqual(null);   
	          	})
	          	.end(function(err,res){
			      	res.status.should.equal(200);   
			      	done();
		    	})
	  	});
 	})
 	describe("patch/users/update/:id/ Given NOT valid parameters",function(){
	  	it('UPDATE should not return _id', function (done) {
	        let params = {
	          firstname: 'bobby'+Math.random(),
	          lastname: 'yap',
	          password: 'dA1!dgfa'
	        };

	      	server
	          	.patch('/users/update/afa')
	          	.send(params)
	          	.expect(401)
	          	.expect("Content-type",/json/)
	          	.expect(res => {
	            	expect(res.body).to.has.property('error');
	          	})
	          	.end(function(err,res){
			      	res.status.should.equal(401);   
			      	done();
		    	})
	  	});
 	})

	/* UPDATE USER*/	
});

