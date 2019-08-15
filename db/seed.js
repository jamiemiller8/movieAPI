const Genre = require("../models/Genre");
const Movie = require("../models/Movie");
const Person = require("../models/Person");
const axios = require("axios");
const url = [
  "http://www.omdbapi.com/?t=titanic&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=it&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=bridesmaids&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=avengers&apikey=6a0d2ef3",
  "http://www.omdbapi.com/?t=inception&apikey=6a0d2ef3 "
];
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
    console.log(movies)
    movies.forEach(movie => {
      data[i] = {
        title: movie.title,
        year: movie.year,
        actors: movie.actors,
        plot: movie.plot
      }
      i++;
    });
    return data;
  })
  .then(data => {
      Movie.deleteMany()
      .then(r => {
          Movie.create(data)
      })
      .then(r => console.log(r))
  })

  //eventually going to have to map through the movie data thing in order to 
  //seed the genre and person seed info? 

