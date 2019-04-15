  $(document).ready(function(){

    var genreSearch = ""
    var genre0   
    var randomGenre
    var recString = ""
    var tmdbKey = "7bc99c9ee75ec56de6b188d9007199dc"
  
  //on click button to search movie via api cal'
    $("#search-button").on("click", function (event) {
      event.preventDefault()
      $("#movie-title, #movie-display, #data-display").empty();
      var movie = $("#user-input").val();
  
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=d62e414d";
  
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        //grab the information and set it to variables
        .then(function (response) {
          console.log(queryURL);
          console.log(response);
          var title = response.Title;
          var actors = response.Actors;
          var director = response.Director;
          var genre = response.Genre;
          var metascore = response.Metascore;
          var rating = response.Rated;
          var imdb = response.Ratings[0].Value;
          var rt = response.Ratings[1].Value;
          var img = response.Poster;
          //takes the response and goes down the object to genre, takes only the first string entry prior to the first ",""
          genre0 = response.Genre.split(", ");
          console.log(genre0)
          
          var  randomIndex = Math.floor(Math.random() * genre0.length);
          
  
          randomGenre = genre0[randomIndex];
          console.log(randomGenre);
          // console.log(genre0[i]);
  
          //save genre.split(",") var
  
  
          //set each one to tags and save them in variables
          var titleH = $("<h1>").text(title);
          var genreP = $("<h2>").text("Genre: " + genre);
          var ratingP = $("<p>").text("Rated: " + rating);
          var actorsP = $("<p>").text("Starring: " + actors);
          var directorP = $("<p>").text("Directed by: " + director);
          var metaP = $("<p>").text("Metascore: " + metascore);
          var imdbP = $("<p>").text("iMDB score: " + imdb);
          var rtP = $("<p>").text("Rotten Tomatoes Score: " + rt);
          var imgApp = $("<img>").attr("src", img);
          //append to the page
          $("#movie-title").append(
              titleH,
          )
  
          $("#movie-display").append(
              genreP,
              imgApp,
          );
  
          $("#data-display").append(
              ratingP,
              actorsP,
              directorP,
              genreP,
              metaP,
              imdbP,
              rtP,
          );
  
          //image
          //title
          //var rt
          //x3
  
          //var genre up top+
  
          // /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc
          //  https://api.themoviedb.org/3/movie/550?api_key=7bc99c9ee75ec56de6b188d9007199dc+
          //once we got it goin, nix the button and make it fluid movement
          //take top three results and append to card on right for recommendations
          //on click function for each recommendation on image
          //further query for omdb to produce the results in movie image
          //rinse and repeat
        });
  
    });
    //call api for tmdb to search descending rating of genre with button click
    $("#rec-button").on("click", function (event) {
      event.preventDefault();
      console.log("clicked")
  
      //save data from genre0 in a variable as lower case
      genreSearch = randomGenre.toLowerCase();
      console.log(genreSearch);
  
  
      // const genreObj = {
      //     animated: 16,
      //     action: 28,
      //     horror: 27,
      // }
      // console.log(genre[genreSearch])
  
      //conditional statement to convert the genre from omdb's format to tmdb's format for genres
      if (genreSearch === "action") {
        recString = "28";
      } else if (genreSearch === "animated") {
        recString = "16";
      } else if (genreSearch === "documentary") {
        recString= "99";
      } else if (genreSearch === "drama") {
        recString = "18";
      } else if (genreSearch === "family") {
        recString = "10751";
      } else if (genreSearch === "fantasy") {
        recString = "14";
      } else if (genreSearch === "history") {
        recString = "36";
      } else if (genreSearch === "comedy") {
        recString = "35";
      } else if (genreSearch === "war") {
        recString = "10752"
      } else if (genreSearch === "horror"){
        recString = "27";
      } else if (genreSearch === "crime") {
        recString = "80";
      } else if (genreSearch === "music") {
        recString = "10402";  
      } else if (genreSearch === "mystery") {
        recString = "9648";
      } else if (genreSearch === "romance") {
        recString = "10749";
      } else if (genreSearch === "sci-fi") {
        recString = "878";
      } else if (genreSearch === "tv movie") {
        recString = "10770";
      } else if (genreSearch === "thriller") {
        recString = "53";
      } else if (genreSearch === "western") {
        recString = "37";
      } else if (genreSearch === "adventure") {
        recString = "12";}
  
  
      console.log(recString);
      console.log(genreSearch);
  
      // https://api.themoviedb.org/3/discover/movie?api_key=7bc99c9ee75ec56de6b188d9007199dc&with_genres=28&sort_by=vote_average.desc&sort_by=vote_count.desc
      var tmdbQuery = `"https://alex-rosencors.herokuapp.com?url=https://api.themoviedb.org/3/discover/movie?apikey=${tmdbKey}&with_genres=${recString}&sort_by=vote_average.desc&sort_by=vote_count.desc"`;
  
      console.log(`"https://alex-rosencors.herokuapp.com?url=https://api.themoviedb.org/3/discover/movie?&apikey=${tmdbKey}&with_genres=${recString}&sort_by=vote_average.desc&sort_by=vote_count.desc"`)
  
      $.ajax({
          url: tmdbQuery,
          method: "GET"
        })
        //grab the information and set it to variables
        .then(function (response) {
          console.log(response);
    });
  });
  
  //get response from tmdb
  //take response, randomize indexes again for display on the page
  //append to side bar
  //clear side bar for each search after appending
  //set click fuction to each image
  //take value for which we want to search(genre for each, potentially randomized again)
  //query abck to omdb
  //display new results to the main display div
  //at some point, eliminate button on right card and tie it to a document event
  
  
  });
    //leave me here!