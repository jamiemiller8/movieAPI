const Genre = require("../models/Genre");
const Movie = require("../models/Movie");
const Person = require("../models/Person");
// const connection = require("connection")
const axios = require("axios");
const url = [
  "http://www.omdbapi.com/?i=tt0120338&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=it&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=bridesmaids&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=avengers&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=inception&apikey=6a0d2ef3 "
];
// let connect = connection.connect;
let movies = [];
axios
  .get(url[0])
  .then(r => movies.push(r.data))
  .then(axios.get(url[1])
  .then(r => movies.push(r.data)))
  .then(axios.get(url[2])
  .then(r => movies.push(r.data)))
  .then(axios.get(url[3])
  .then(r => movies.push(r.data)))
  .then(axios.get(url[4])
  .then(r => movies.push(r.data)))
  .then(r => {
    let data = []
    let i = 0
    let genres = [];
    console.log(movies)
    console.log(movies.length)

    for(i=0;i<movies.length; i++){
      genres = [];
      genres = movies[i].Genre.split(', ');
      console.log(genres);
      data.push({
        title: movies[i].Title,
        year: movies[i].Year,
        genres: movies[i].Genre,
        actors: movies[i].Actors,
        plot: movies[i].Plot
      });
    }
    
    Movie.deleteMany()
      .then(r => {
          Movie.create(data)
      })
    // movies.forEach(movie => {
    //   // console.log(movie)
    //   data[i] = {
    //     title: movie.Title,
    //     year: movie.Year,
    //     actors: movie.Actors,
    //     plot: movie.Plot
    //   }
    //   i++;
    // });
    // console.log(data)
    
  })
  // .then(data => {
      
  // })

  //eventually going to have to map through the movie data thing in order to 
  //seed the genre and person seed info? 

