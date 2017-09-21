var apiKey: "bb138c818e634e74a55413b6d15ac2fd";

var queryURL: ;

var keyword:

var year: 

var 
$.ajax ({
	url: queryURL,
	method: 'GET'
}).done(function(result){
	console.log(result);
})