var express = require('express');
var router = express.Router();
var path = require('path'), fs = require('fs');
var multer = require('multer');

var uploading = multer({
  dest: __dirname + '/images/uploads/',
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', function (req, res) {
	console.log("in upload");
	console.log("------------: ", req.param.displayImage);

	res.render('index', { title: '' });
	
});


module.exports = router;
