console.log('hello, newsAPI?');

$(document).ready(function(){
	//accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);

	//reading users choice
	document.getElementById('submit').addEventListener('click', function(){
		var country = $('#selectCountry').value;
		var category = $('#selectCate').value;

		console.log(selectCountry,selectCate); //actual parameter
		displayData(selectCountry, selectCate);//actual parameter
	});

	function displayData (country,category) {
		// var url = `http://newsapi.org/v2/top-headlines?country=au&apiKey=${myKey[0]}`,
	}

		//ajax method
		$.ajax({
			url: `http://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`,
			type:'GET',
			data:'json',
			success: function (data) {
		      console.log(data.articles[0].description);
					var i;
				 for (i = 0; i < data.articles.length; i++) {
				 for (i = 0; i < data.articles.length; i++) {

					 document.getElementById('result').innerHTML +=
					 // for (j = 0; j < data.articles[i].source.id.length; j++) {
					 '<div class="card mx-auto m-2 p-3 col col-sm-6 col-md-3 col-lg-3 mx-3" style="width: 18rem;">' +
					 '<img src="' +  data.articles[i].urlToImage + '" class="card-img-top" alt="pic">' +
					 '<div class="card-body text-center text-primary">' +
						 '<h5 class="card-title">Article Title: ' + data.articles[i].title + '</h5>' +
						 '<p class="card-text"><b>Published at</b>: ' + data.articles[i].publishedAt + '</p>' +
						 '<p class="card-text"><b>ID</b>: ' + data.articles[i].source.id + '</p>' +
						 '<p class="card-text"><b>Name</b>: ' + data.articles[i].source.name + '</p>' +
						 '<p class="card-text"><b>Author</b>: ' + data.articles[i].author + '</p>' +
						 '<p class="card-text"><b>Description</b>: ' + data.articles[i].description + '</p>' +
						 '<p class="card-text"><b>Content</b>: ' + data.articles[i].content + '</p>' +
						 '<a href="#" class="btn btn-primary">Go somewhere</a>' +
					 '</div>' +
				 '</div>';
					 }
				 }

			 },

		    error: function () {
		      console.log('error');
		    }//error

			});//ajax

});//document.ready
