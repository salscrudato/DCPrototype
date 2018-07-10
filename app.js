const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//Connect to mongodb, assume I can change the config file to connect
//to hosted db
//mongoose.connect(config.database);

// //On connect to db
// mongoose.connection.on('connected', function(){
// 	console.log('Connected to database '+config.database);
// });
//
// //On connection error
// mongoose.connection.on('error', function(err){
// 	console.log('Database connection error '+err);
// });

const app = express();

//const port = 3000;
const port = process.env.PORT || 8080;

app.use(cors());

//** Don't have public folder yet
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser - allows us to parse incoming form data from the body
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

// require('./config/passport')(passport);

app.get('/', function(req, res){
	res.send('invalid endpoints');
});

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function(){
	console.log('Server started on port '+port);
});
