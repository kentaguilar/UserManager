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

//----- DB Connection ------
mongoClient.connect(mongoClientUrl, (err, client) => {
	if (err) return console.log(err) 
	
	db = client.db('userdb')	
	userCollection = db.collection('usercollection');

	console.log('connected to db');
});

//----- Routing ------
//Resources
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));

//Pages
app.get('/', function(req, res){	
	res.render('pages/login.ejs');
});
app.get('/dashboard', function(req, res){			
	if(url.UrlHelper.checkIfReferralIsValid(req.headers.referer)){
		res.render('pages/dashboard.ejs', {
			name: req.query.name
		});	
	}	
	else{
		res.render('pages/notfound.ejs');	
	}
});
app.get('/register', function(req, res){	
	res.render('pages/registration.ejs');
});

//Api
app.get('/api/get-users', function(req, res){
	model.User.getAllUsers(userCollection, res);
});
app.post('/api/auth-user', function(req, res){		
	model.User.authUser(userCollection, res, req.body);
});
app.post('/api/register-user', function(req, res){		
	model.User.registerUser(userCollection, res, req.body);
}); 