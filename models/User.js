exports.User = {
	getAllUsers: function(userCollection, res){
		userCollection.find().toArray(function(err, results) {
			if (err) return console.log(err);			

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({users: results}));	
		})	
	},
	authUser: function(userCollection, res, userObj){		
		userCollection.find({ username: userObj.username, password: userObj.password }).toArray(function(err, results) {			
			var status = true;
			if (err){
				status = false;
			}	
			if(results.length <= 0){
				status = false;
			}		

			var response = {
				result: results[0],
				status: status
			};	

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({response: response}));	
		})	
	},
	registerUser: function(userCollection, res, userObj){
		userCollection.insertOne(userObj, (err, result) => {
			var status = true;
			if (err){
				status = false;
			}

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({status: status}));	
		});
	},
};