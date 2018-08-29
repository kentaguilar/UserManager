exports.UrlHelper = {	
	checkIfReferralIsValid: function(givenUrl){				
		var response = false;
		if(givenUrl == "http://localhost:3000/" || givenUrl == "http://deepmirage.com:3000/"){
			response = true;
		}

		return response;
	},	
};