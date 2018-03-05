var config = require('../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, {native_parser: true});
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function authenticate(username, password){
    var deffered = Q.defer();

    db.users.findOne({ username: username },function(err, user){
        if (err) deffered.reject(err.name + ':' + err.message);

        if(user && bcrypt.compareSync(password, user.hash)){
            deffered.resolve({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: jwt.sign({ sub: user._id }, config.secret)
            });
        } else {
            deffered.resolve();
        }
    });
    return deffered.promise;
}
function getAll(){
    var deffered = Q.defer();

    db.users.find().toArray(function (err, users){
        if(err) deffered.reject(err.name + ':' + err,message)

        users = _.map(users, function(user){
            return _.omit(user, 'hash')
        })
        deffered.resolve(users)
    })  
    return deffered.promise;
}
function getById(_id){
    var deffered = Q.defer();

    db.users.findById(_id, function(err,user){
        if(err) deffered.reject(err.name + ': ' + err.message)

        if(user){
            deffered.resolve(_.omit(user, 'hash'));
        }else{
            deffered.resolve();
        }
    });
    return deffered.promise;
}

function create(userParam){
    var deffered = Q.defer();

    db.users.findOne(
        {username: userParam.username},
        function(err, user){
            if(err) deffered.reject(err.name + ':' + err.message)

            if(user){
                deffered.reject('Username' + userParam.username + 'is already exist')
            }else{
                createUser();
            }
        }
    )


    function createUser(){
        var user = _.omit(userParam, 'password');

        user.hash = bcrypt.hashSync(userParam.password, 10);

        db.users.insert(
            user,
            function(err, doc){
                if(err) deffered.reject(err.name + ':' + err.message)

                deffered.resolve();
            });
        return deffered.promise;
        }
}

function update(_id, userParam){
    var deffered = Q.defer()

    db.users.findById(_id, function(err, user){
        if(err) deffered.reject(err.name + ':' + err.message);

        if(user.username !== userParam.username){
            db.user.findOne(
                {username: userParam.username},
                function(err, user){
                    if(err) deffered.reject(err.name + ':' + err.message);

                    if(user){
                        deffered.reject('Username' + req.body.username + 'is already exist')
                    }else{
                        updateUser();
                    }
                }
            )
        }else{
            updateUser();
        }
    })

    function updateUser(){
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username
        };

        if(userParam.password){
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function(err, doc){
                if(err) deffered.reject(err.name + ':' + err.message)

                deffered.resolve();
            });
        }
    return deffered.promise;
}

function _delete(_id){
    var deffered = Q.defer()

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function(err){
            if (err) deffered.reject(err.name + ':' + err.message)
            deffered.resolve()
        });
        return deffered.promise;
}