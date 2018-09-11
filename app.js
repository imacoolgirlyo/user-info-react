const express = require('express'),
path = require('path'),
favicon = require('serve-favicon'),
logger = require('morgan'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/user-crud', {
     promiseLibrary : require('bluebird')
}).then(() => console.log('connection sucessful'))
.catch(err => console.errror(err));


const app = express();
const user = require('./routes/user')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended' : false}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/user', user);

app.use(function(req, res, next){
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;