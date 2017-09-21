var apiKey: "bb138c818e634e74a55413b6d15ac2fd";

var queryURL: "http://api.nytimes.com/svc/archive/v1/ "+ year +"/ "+ month +".json?api-key="+ apiKey +"";

var year: 

var 
$.ajax ({
	url: queryURL,
	method: 'GET'
}).done(function(result){
	console.log(result);
})