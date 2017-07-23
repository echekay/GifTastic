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



$(document).ready(function() {

    // GLobal Variables
    // ---------------------------------------
    // Initial array of gifs

    var gifArray = ["Steve Carrell", "Richard Ayoade", "Donald Glover"];
   




    // Functions to run during process
    // ------------------------------------------------------
    // Function to render buttons
    function renderButtons() {

        $("#gif-buttons").empty();

        for (var i = 0; i < gifArray.length; i++) {

            var a = $("<button>");

            a.addClass("gif");

            a.attr("data-name", gifArray[i]);

            a.text(gifArray[i]);

            $("#gif-buttons").append(a);
        }
    }

    function displayGifs() {

    		$("#gif-output").empty();
    		var gif = $(this).attr("data-name");
    		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=93521d7b9a6a4859a17de5d61eb5a7a3&limit=10";

    		$.ajax({
          		url: queryURL,
          		method: 'GET'
        	}).done(function(response) {
        		console.log(queryURL);
          		console.log(response);
          		var results = response.data;
          		for (var i = 0; i < results.length; i++) {

	          		var gifDiv = $("<div>");
	          		var p = $("<p>").text("Rating: " + results[i].rating);
	          		var gifImage = $("<img>");
	          		gifImage.attr("src", results[i].images.fixed_height.url);
	          		gifDiv.append(p);
	          		gifDiv.append(gifImage);
	          		$("#gif-output").prepend(gifDiv);
	          		}
        	}); 
   	
    }

    // ---------------------------------------------------
    // Main function to grab input and send request to server
    $("#add-gif").on("click", function(event) {

        event.preventDefault();

        var gif = $("#gif-input").val().trim();

        gifArray.push(gif);


        renderButtons();
       	$("#gif-input").empty();     
    });

    $(document).on("click", ".gif", displayGifs);

    renderButtons();

});