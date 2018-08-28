var Helper = {
	getUrlParameterByName: function(name, url) {
		if (!url) {
	      url = window.location.href;
	    }

	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	    results = regex.exec(url);

	    if (!results){
	    	return null;
	    }

	    if (!results[2]){
	    	return '';
	    }
	    
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	},
	prettifyTime: function(givenTime){
		var output = "";
		if(givenTime != "N/A" && givenTime) {			
			var hour = parseInt(givenTime.split(':')[0]); 
			var minute = parseInt(givenTime.split(':')[1]); 
			var second = parseInt(givenTime.split(':')[2]); 

			if(hour >= 0){
				if(!this.isMinusZero(hour)){
					var hourDisplay = (hour > 0) ? hour + " Hr" + ((hour > 1) ? "s" : "") + ((minute > 0) ? ", " : "") : "";			
					var minuteDisplay = (minute > 0) ? minute + " Min" + ((minute > 1) ? "s" : "") + ((second > 0) ? ", " : "") : "";			
					var secondDisplay = (second > 0) ? second + " Sec" + ((second > 1) ? "s" : "") : "";

					output = hourDisplay + minuteDisplay + secondDisplay;
				}
				else{
					output = "Not Late";
				}
			}
			else{
				output = "Not Late";
			}
		}
		else{
			output = "N/A";
		}

		return output;		
	},
	isMinusZero: function(givenTime){		
		return 1/givenTime === -Infinity;
	},
	militaryToStandardTime: function(givenTime){	
		//console.log(givenTime);	
		return (givenTime != "N/A" && givenTime) ? moment(givenTime, 'HH:mm:ss').format('h:mm:ss A') : givenTime;
	},
	serializeFormFields: function(e){
		var form = $(e.target);	
		return form.serialize();
	},
	monetizeString: function(givenValue){
		return givenValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	demonetizeString: function(givenValue){
		return givenValue.replace(/,(?=[\d,]*\.\d{2}\b)/g, "");
	},
	summarizeString: function(givenValue){
		return (givenValue.length > 25) ? givenValue.substring(0,25) + "..." : givenValue;	
	},
	encodeString: function(givenValue){
		givenValue = givenValue.replace("'", "&#39;");
		givenValue = givenValue.replace('"', "&#34;");
		return givenValue;
	}
};