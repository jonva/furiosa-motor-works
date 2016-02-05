var express = require('express');
var router = express.Router();
var api = require('../lib/api');
var Promise = require('es6-promise').Promise;

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

/*
* Task 1:
* Make models alphabetically sortable (ascending, descending, default)
*/
router.get('/models', function(req, res, next) {
	//Sol: Fetched, resolved promise and handled error
	api.fetchModels().then(function(result){
		res.render('models', {models: result});
	},
	function(error){
		//Sol: Added basic error handler here
		res.render('error', {error: error, message: "Whoops, something went wrong while fetching Models!"});
	})
	
});

/*
* Task 2:
* Make services filterable by type (repair, maintenance, cosmetic)
*/
router.get('/services', function(req, res, next) {
	//Sol: Fetched, resolved promise and handled error
	api.fetchServices().then(function(result){
		res.render('services', {services: result});
	},
	function(error){
		//Sol: Added basic error handler here
		res.render('services', {services: []});
	})
});

/*
* Task 3:
* Bugfix: Something prevents reviews from being rendered
* Make reviews searchable (content and source)
*/
router.get('/reviews', function(req, res, next) {
	return Promise.all([api.fetchCustomerReviews(), api.fetchCorporateReviews()])
		.then(function(reviews) {
			//Sol: Flattened the Array of Arrays here - [[corporate array],[customer array]]
			//became [corporate array items, customer array items]
			res.render('reviews', {reviews: [].concat.apply([], reviews)});
		}, function(error){
			console.log("Error fetching array")
		});
});

module.exports = router;
