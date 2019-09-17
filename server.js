var app = require('./express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');
const bcrypt = require('bcrypt');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser());
app.use(session({
    secret: "put some text here",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(app.express.static(__dirname + '/public'));

require('./c2csms/db');
const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('Server started on port'+ port);
});