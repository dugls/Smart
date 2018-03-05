var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('./config.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json)

app.use(expressJwt({
    secret: config.secret,
    getToken: function(req){
        if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
            return req.headers.authorization.split(' ')[1];
        }else if(req.query && req.query.token){
            return req.query.token
        }
        return null;
    }
}).unless({ path: ['/users/authenticate', '/users/register'] }))

app.use('/users', require('./controllers/user.controller'));

var port = process.env.MODE_ENV === 'production' ? 80 :4000
var server = app.listen(port, function(){
    console.log('Serer listening in port' + port);
})