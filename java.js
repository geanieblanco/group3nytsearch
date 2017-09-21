var apiKey = "bb138c818e634e74a55413b6d15ac2fd";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var keyword =

var year = 

var 
$.ajax ({
	url: queryURL,
	method: 'GET'
}).done(function(result){
	console.log(result);
})

$("#search-button").on("click", function())