var RenderHelper = {	
	ShowJson: function(res, results){
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(results));	
	},
};