$(document).ready(function () {

  var genreSearch = ""
  var genre0
  // var tmdbGenreArray0 
  // var tmdbGenreArray1
  // var tmdbGenreArray2
  var randomGenre
  var recString = ""
  var tmdbKey = "7bc99c9ee75ec56de6b188d9007199dc"
  var recArray = [];
  var title0;
  var title1;
  var title2;




  $("#sec-id").hide();
  $("#div-hide").hide();

  //on click button to search movie via api cal'
  $("#search-button").on("click", function (event) {
    event.preventDefault()
    $("#movie-title, #movie-display, #data-display, #user-input").empty();
    recArray = [];
    var movie = $("#user-input").val();
 

    $("#sec-id").show();
    $("#div-hide").show();
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
        $("#user-input").val("")

        var randomIndex = Math.floor(Math.random() * genre0.length);


        randomGenre = genre0[randomIndex];
        console.log(randomGenre);
        // console.log(genre0[i]);

        //save genre.split(",") var


        //set each one to tags and save them in variables
        var titleH = $("<h1>").text(title);
        var genreP = $("<p>").text("Genre: " + genre);
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

        getRelatedMovies();

        //image+
        //title
        //var rt
        //x3

        //var genre up top+

        // /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc
        // https://api.themoviedb.org/3/movie/550?api_key=7bc99c9ee75ec56de6b188d9007199dc+
        //once we got it goin, nix the button and make it fluid movement
        //take top three results and append to card on right for recommendations+
        //on click function for each recommendation on image
        //further query for omdb to produce the results in movie image
        //rinse and repeat
      });

  });
  // GET RELATED MOVIES
  function getRelatedMovies() {
    $("#side-display").empty();
    console.log("clicked")

    //save data from genre0 in a variable as lower case
    genreSearch = randomGenre.toLowerCase();
    console.log(genreSearch);


    // const genreObj = {
    //   animated: 16,
    //   action: 28,
    //   horror: 27,
    // }
    // console.log(genre[genreSearch])

    //conditional statement to convert the genre from omdb's format to tmdb's format for genres
    if (genreSearch === "action") {
      recString = "28";
    } else if (genreSearch === "animated") {
      recString = "16";
    } else if (genreSearch === "documentary") {
      recString = "99";
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
    } else if (genreSearch === "horror") {
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
      recString = "12";
    }


    // console.log(recString);
    // console.log(genreSearch);

    // https://api.themoviedb.org/3/discover/movie?api_key=7bc99c9ee75ec56de6b188d9007199dc&with_genres=28&sort_by=vote_average.desc&sort_by=vote_count.desc
    var tmdbQuery1 = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&with_genres=${recString}&sort_by=vote_average.desc&sort_by=vote_count.desc`

    //maybe add multiple calls for multiple pages

    console.log(`https://api.themoviedb.org/3/discover/movie?&api_key=${tmdbKey}&with_genres=${recString}&sort_by=vote_average.desc&sort_by=vote_count.desc`)

    // tmdbQuery = tmdbQuery.trim();

    $.ajax({
        url: tmdbQuery1,
        method: "GET"
      })
      //grab the information and set it to variables
      .then(function (response) {
        console.log(response);
        // log responses of title, image, rating
        //results[0].title
        //results[0].poster_path
        //results[0].vote_average
        var tmdbIndex = Math.floor(Math.random() * response.results.length);
        var tmdbIndex1 = Math.floor(Math.random() * response.results.length);
        var tmdbIndex2 = Math.floor(Math.random() * response.results.length);
        console.log(tmdbIndex);
        console.log(tmdbIndex1);
        console.log(tmdbIndex2);

        //lol this shit's so dumb, but it works
        if (tmdbIndex === tmdbIndex1){
          tmdbIndex = Math.floor(Math.random() * response.results.length)
        } else{
          console.log(false);
        };
        if (tmdbIndex === tmdbIndex2){
          tmdbIndex = Math.floor(Math.random() * response.results.length)
        } else{
          console.log(false);
        };
        if (tmdbIndex1 === tmdbIndex2){
          tmdbIndex1 = Math.floor(Math.random() * response.results.length)
        } else{
          console.log(false);
        };

        // if (tmdbIndex !== tmdbIndex1 !== tmdbIndex2){

        var sideTitle0 = response.results[tmdbIndex].title;
        var sidePoster0 = response.results[tmdbIndex].poster_path;
        var sideVote0 = response.results[tmdbIndex].vote_average;
        // var sideGenre0 = response.results[tmdbIndex].genre_ids;
        var sideTitle1 = response.results[tmdbIndex1].title;
        var sidePoster1 = response.results[tmdbIndex1].poster_path;
        var sideVote1 = response.results[tmdbIndex1].vote_average;
        // var sideGenre1 = response.results[tmdbIndex1].genre_ids;
        var sideTitle2 = response.results[tmdbIndex2].title;
        var sidePoster2 = response.results[tmdbIndex2].poster_path;
        var sideVote2 = response.results[tmdbIndex2].vote_average;
        // var sideGenre2 = response.results[tmdbIndex2].genre_ids;
        // console.log(sideGenre1);
        // tmdbGenreArray0 = response.results.sideGenre0.split(", ")[0];
        // tmdbGenreArray1 = response.results.sideGenre1.split(", ")[0];
        // tmdbGenreArray2 = response.results.sideGenre2.split(", ")[0];
        // console.log(tmdbGenreArray0);
        // console.log(tmdbGenreArray1);
        // console.log(tmdbGenreArray2);


        var titleDisplay0 = $("<h4>").text(sideTitle0);
        var imgDisplay0 = $("<img>").attr("src", `http://image.tmdb.org/t/p/w185/${sidePoster0}`);
        var ratingDisplay0 = $("<p>").text("Rating: " + sideVote0);
        var titleDisplay1 = $("<h4>").text(sideTitle1);
        var imgDisplay1 = $("<img>").attr("src", `http://image.tmdb.org/t/p/w185/${sidePoster1}`);
        var ratingDisplay1 = $("<p>").text("Rating: " + sideVote1);
        var titleDisplay2 = $("<h4>").text(sideTitle2);
        var imgDisplay2 = $("<img>").attr("src", `http://image.tmdb.org/t/p/w185/${sidePoster2}`);
        var ratingDisplay2 = $("<p>").text("Rating: " + sideVote2);



        $("#side-display").append(
          titleDisplay0,
          imgDisplay0,
          ratingDisplay0,
          titleDisplay1,
          imgDisplay1,
          ratingDisplay1,
          titleDisplay2,
          imgDisplay2,
          ratingDisplay2
        );
        // } else {
        //  omdbIndex = Math.floor(Math.random() * response.results.length)
        //  omdbIndex1 = Math.floor(Math.random() * response.results.length)
        //  omdbIndex2 = Math.floor(Math.random() * response.results.length)
        // }
        recArray.push(sideTitle0, sideTitle1, sideTitle2);
        console.log(recArray);
        title0 = recArray[0];
        title1 = recArray[1];
        title2 = recArray[2];
        console.log(title1);

        (imgDisplay0).addClass("searchOmdb");
        (imgDisplay1).addClass("searchOmdb");
        (imgDisplay2).addClass("searchOmdb");

        $(imgDisplay0).attr("id", `${title0}`);
        $(imgDisplay1).attr("id", `${title1}`);
        $(imgDisplay2).attr("id", `${title2}`);

      });
  }

  //get response from tmdb

  //take response, randomize indices again for display on the page+
  //append to side bar+
  //clear side bar for each search after appending+
  //set click fuction to each image+
  //take value for which we want to search(genre for each, potentially randomized again)
  //query abck to omdb
  //display new results to the main display div
  //at some point, eliminate button on right card and tie it to a document event+
  $("#side-display").on("click", ".searchOmdb", function (event) {
    event.preventDefault();
    $("#side-display").empty();
    $("#movie-title, #movie-display, #data-display, #user-input").empty();
    //store value of id clicked in a string attached to a variable
    var omdbSearch = $(this).attr("id");
    console.log(omdbSearch)
    //use variable for api call
    var omdbURL = "https://www.omdbapi.com/?t=" + omdbSearch + "&apikey=d62e414d";

    $.ajax({
        url: omdbURL,
        method: "GET"
      })
      .then(function (response) {
        console.log(omdbURL);
        console.log(response);

        var title = response.Title;
        var actors = response.Actors;
        var director = response.Director;
        var genre = response.Genre;
        var metascore = response.Metascore;
        var rating = response.Rated;
        var imdb = response.Ratings[0].Value;
        var rt = response.Ratings[1].Value;
        console.log(rt);
        var img = response.Poster;

        var titleH = $("<h1>").text(title);
        var genreP = $("<p>").text("Genre: " + genre);
        var ratingP = $("<p>").text("Rated: " + rating);
        var actorsP = $("<p>").text("Starring: " + actors);
        var directorP = $("<p>").text("Directed by: " + director);
        var metaP = $("<p>").text("Metascore: " + metascore);
        var imdbP = $("<p>").text("iMDB score: " + imdb);
        var rtP = $("<p>").text("Rotten Tomatoes Score: " + rt);
        var imgApp = $("<img>").attr("src", img);

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
        recArray = [];
        getRelatedMovies();

      });
  });
});
//leave me here!