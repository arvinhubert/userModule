let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//create user
router.post('/create', controller.createUser);

//post check user
router.post('/login', controller.login);

router.patch('/update/:id', controller.updateUser);


module.exports = router;
