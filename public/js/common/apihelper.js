var ApiHelper = {	
	getData: function(url, funcCB, obj = {}){
		$.ajax({
			type: "GET",
			url: url,		
			data: $.param(obj),				
			dataType: "json",
			success: function(response){				
				funcCB(response);
			},
			error: function(response){
				funcCB(response);
			}
		});		
	},
	saveData: function(url, obj, funcCB){
		$.ajax({
			type: "POST",
			url: url,						
			data: $.param(obj),
			dataType: "json",
			success: function(response){				
				funcCB(response);
			},
			error: function(response){
				funcCB(response);
			}
		});		
	},	
	deleteData: function(url, obj, funcCB){
		$.ajax({
			type: "POST",
			url: url,						
			data: $.param(obj),
			dataType: "json",
			success: function(response){				
				funcCB(response);
			},
			error: function(response){
				funcCB(response);
			}
		});		
	},
};