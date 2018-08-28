var express = require('express');
var bodyParser= require('body-parser');
var app = express();
var http = require('http').Server(app);
var mongoClient = require('mongodb').MongoClient
var mongoClientUrl = "mongodb://127.0.0.1:27017";
var model = require('./models/User.js');
var url = require('./public/js/common/urlhelper.js');

var db;
var userCollection;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

http.listen(3000, function(){
  console.log('listening on *:3000');
});

//connect to mongo db
mongoClient.connect(mongoClientUrl, (err, client) => {
	if (err) return console.log(err) 
	
	//initiate db
	db = client.db('userdb')

	//initiate collections
	userCollection = db.collection('usercollection');

	console.log('connected to mongo-db');
})

//routing
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));

//views
app.get('/', function(req, res){	
	res.render('pages/login.ejs');
});
app.get('/dashboard', function(req, res){	
	console.log(req.headers.referer);
	if(url.UrlHelper.checkIfReferralIsValid(req.headers.referer)){
		res.render('pages/dashboard.ejs');	
	}	
	else{
		res.render('pages/notfound.ejs');	
	}
});
app.get('/register', function(req, res){	
	res.render('pages/registration.ejs');
});

//api
app.get('/api/get-users', function(req, res){
	model.User.getAllUsers(userCollection, res);
});

app.post('/api/auth-user', function(req, res){		
	model.User.authUser(userCollection, res, req.body);
});

app.post('/api/register-user', function(req, res){		
	model.User.registerUser(userCollection, res, req.body);
});