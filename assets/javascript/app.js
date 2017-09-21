//
var apiKey = "bb138c818e634e74a55413b6d15ac2fd";

var keyword = $("#search").val();

var queryURL = "http://api.nytimes.com/svc/search/v1/article?format=json&?q="+ keyword +"&api-key="+ apiKey +"";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
          console.log(response);
       });