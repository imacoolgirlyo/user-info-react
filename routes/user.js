//SERVER ROUTER  : localhost:3001/api/user

const express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
User = require('../models/User');

router.get('/', function(req, res, next){
    User.find(function(err, users){
        if(err) return next(err);
        res.json(users);
    })
});

router.get('/:id', function(req, res, next){
    User.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    })

})

router.post('/', function(req, res, next){
    User.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })

});

router.put('/:id', function(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })

})

router.delete('/:id', function(req, res, next){
    User.findByIdAndRemove(req.params.id, req.body,function(err, post){
        if(err) return next(err);
        res.json(post);
    } )

})


module.exports = router;