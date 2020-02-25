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
		var url = 'http://newsapi.org/v2/top-headlines?&apiKey=${myKey[0]}';
	}

		//ajax method
		$.ajax({
			url: url,
			type:'GET',
			data:'json',
			success: function (data) {
		      console.log(data);

		      // Empty results element first
		      $("#results").html('');

		      for (var i = 0; i < data.articles.length; i++) {
		        var article = data.articles[i];

		        // Append a new card for each article
		        $("#results").append(`
		          <div class="col-md-4 p-2">
		            <div class="card" style="height: 100%">
		              <img src="${article.urlToImage}" class="card-img-top">
		              <div class="card-body">
		                <h5 class="card-title">${article.title}</h5>
		                <p class="card-text">${article.description}</p>
		              </div>
		            </div>
		          </div>
		        `);
		      }
		    },
		    error: function () {
		      console.log('error');
		    }//error

			});//ajax

});//document.ready