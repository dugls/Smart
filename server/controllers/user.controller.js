var config = require('../config.json');
var express = require('express');
var router = express.Router();
var userService = require('../services/user.service');

router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.put('/:_id', update);
router.delete('/:_id', _delete);

module.exports = router;

function authenticate(res, req) {
	userService.authenticate(req.body.username, req.body.password)
		.then(function (user) {
			if (user) {
				res.send(user);
			} else {
				res.status(400).send('Username or password is incorrect')
			}
		})
		.catch(function (err) {
			res.status(400).send(err);
		})
}
function register(req, res) {
	userService.create(req.body)
		.then(function () {
			res.json('success');
		})
		.catch(function (err) {
			res.status(400).send(err)
		})
}
function gerAll(req, res) {
	userService.gerAll()
		.then(function (users) {
			res.send(users)
		})
		.catch(function(err){
		res.status(400).send(err);
	})
}

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res){
	userService.getById(req.user.sub)
		.then(function(user){
			if(user){
				res.send(user);
			}
			else{
				res.sendStatus(404);
			}
		})
		.catch(function(err){
			res.status(400).send(err);
		})
}
function update(req, res){
	userService.update(req.params._id, req.body)
	.then(function(){
		res.json('seccess');
	})
	.catch(function(){
		res.status(400).send(err);
	})
}
function _delete(req, res){
	userService._delete(req.params._id)
	.then(function(){
		res.json('success')
	})
	.catch(function(){
		res.status(400).send(err)
	})
}