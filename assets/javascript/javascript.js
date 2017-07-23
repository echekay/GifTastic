// Psuedocode
// On HTML page there is a bunch of buttons already created that have text that indicates some sort of content/subject.
// Once you click on that button, the action then sends a query to giphy and then receives it back via ajax.
// It then displays the content as a set of 10 gifs in a specific area on the html.
// You then can click on any of the gifs to start the animation and click again to stop the animation.
// You can click on any of the already created buttons to repopulate the page with a new set of gifs that replaces the old ones.
// You can also type in a search term into the input field and click submit.
// After the click function, this will grab the input and create a button on the fly with text of the input that was created.
// You can click on newly created button.
// This will send an ajax request to the giphy servers to search and bring back an object based on that query.
// And then it will populate that same div space that holds all the gifs.
// -------------------------------------------------------------------------------------------------------------------------------
// 

// Initial array of gifs
var gifArray = ["Steve Carrell", "Richard Ayoade", "Donald Glover"];

// Function to render buttons
function renderButtons() {

	$("#gif-output").empty();

	for (var i = 0; i < gifArray.length; i++) {

		var a = $("<button>");

		a.addClass("gif");

		a.attr("data-name", gifArray[i]);

		a.text(gifArray[i]);

		$("#gif-output").append(a);
	}
}

// ---------------------------------------------------
// Function to grab input and send request to server
$("#add-gif").on("click", function(event) {

    event.preventDefault();

    var gif = $("#gif-input").val().trim();
    var queryURL = "http:??api.giphy.com/v1/gifs/search?q=";
    var authKey = "93521d7b9a6a4859a17de5d61eb5a7a3";



    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

});