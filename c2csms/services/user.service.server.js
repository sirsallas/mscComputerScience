var app = require('../../express');
var userModel = require('../models/user/user.model.server');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({usernameField: "email", passwordField: "password"}, localStrategy));
const bcrypt = require('bcrypt');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.get('/api/c2csms/user/:userId', findUserById);
app.put('/api/c2csms/user/:userId', updateUser);
app.delete('/api/c2csms/user/:userId', isAdmin, deleteUser);
app.post('/api/c2csms/user', createUser);
app.get('/api/c2csms/user-list', findAllUsers);
app.get('/api/c2csms/user', findUserByEmail);
app.get('/api/c2csms/users', findAllUsers);

app.post('/api/c2csms/login', passport.authenticate('local'), login); //you can only use login if passport.authenticate is true
app.get('/api/c2csms/checkLoggedIn', checkLoggedIn);
app.get('/api/c2csms/checkAdmin', checkAdmin);
app.post('/api/c2csms/register', register);
app.post('/api/c2csms/logout', logout);
app.delete('/api/c2csms/unregister', unregister);


function findAllUsers(req, res) {
    userModel
        .findAllUsers()
        .then(function (users) {
            res.json(users);
        })
}

function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel
        .findUserById(userId)
        .then(function (user) {
            res.json(user)
        });
}


function updateUser(req, res) {
    console.log(req.body)
    var userId = req.params['userId'];
    var user = req.body;
    userModel
        .updateUser(userId, user)
        .then(function (user) {
            res.json(user)
        })
}

function deleteUser(req, res) {
    var userId = req.params['userId'];
    userModel
        .deleteUser(userId)
        .then(function (response) {
            res.send(response);
        })
}

function findUserByEmail(req, res) {
    if (req.query['email']) {
        var email = req.query['email'];
        userModel
            .findUserByEmail(email)
            .then(function (user) {
                res.json(user)
            })
    }
    else {
        res.sendStatus(404);
    }
}


function createUser(req, res) {
    var user = req.body;
    bcrypt.hash(user.password, 10, function (err, hash) {
        user.password = hash;
        userModel
            .createUser(user)
            .then(function (user) {
                res.json(user);
            })
    });
}

function localStrategy(email, password, done) {
    userModel
        .findUserByEmail(email)
        .then(
            function (user) { //user.password == password
                if (user && bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            },
            function (err) {
                if (err) {
                    return done(err);
                }
            }
        );
}

function login(req, res) {
    var user = req.user;
    res.json(user);
}

function logout(req, res) {
    console.log('here');
    req.logout();
    res.sendStatus(200);
}

function checkLoggedIn(req, res) {
    if (req.isAuthenticated()) {
        res.json(req.user)
    }
    else {
        res.send('0');
    }
}

function checkAdmin(req, res) {
    if (req.isAuthenticated() && req.user.role.indexOf('ADMIN') > -1) {
        res.json(req.user)
    }
    else {
        res.send('0')
    }
}

function unregister(req, res) {
    userModel
        .deleteUser(req.user._id)
        .then(function (status) {
            res.sendStatus(200);
        })
}

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.role.indexOf('ADMIN') > -1) {
        next();
    }
    else {
        res.sendStatus(401);
    }
}


function register(req, res) {
    var user = req.body;
    bcrypt.hash(user.password, 10, function (err, hash) {
        user.password = hash;
        userModel
            .createUser(user)
            .then(function (user) {
                req.login(user, function () {
                    console.log("Some other side");
                    res.json(user);
                    console.log("I finish oo")
                })
            })
    })
}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function (user) {
                done(null, user);
            },
            function (err) {
                done(err, null);
            }
        );
}
