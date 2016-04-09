var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Business = mongoose.model('Business');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/business', function(req, res, next) {
    Business.find(function(err,business){
        if(err){ return next(err); }
        
        res.json(business);
    });
});

module.exports = router;
