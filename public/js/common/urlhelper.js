exports.UrlHelper = {	
	checkIfReferralIsValid: function(givenUrl){				
		var response = false;
		if(givenUrl == "http://localhost:3000/" || givenUrl == "http://localhost:3000/login/"
			|| givenUrl == "http://deepmirage:3000/" || givenUrl == "http://deepmirage:3000/login/"){
			response = true;
		}

		return response;
	},	
};