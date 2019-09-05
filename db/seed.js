// const Genre = require("../models/Genre");
// const Movie = require("../models/Movie");
// const Person = require("../models/Person");
// const axios = require("axios");
// const url = [
//   "http://www.omdbapi.com/?i=tt0120338&apikey=6a0d2ef3",
//   "http://www.omdbapi.com/?t=it&apikey=6a0d2ef3",
//   "http://www.omdbapi.com/?t=bridesmaids&apikey=6a0d2ef3",
//   "http://www.omdbapi.com/?t=avengers&apikey=6a0d2ef3",
//   "http://www.omdbapi.com/?t=inception&apikey=6a0d2ef3 "
// ];

// let movies = [];
// axios
//   .get(url[0])
//   .then(r => movies.push(r.data))
//   .then(axios.get(url[1])
//   .then(r => movies.push(r.data)))
//   .then(axios.get(url[2])
//   .then(r => movies.push(r.data)))
//   .then(axios.get(url[3])
//   .then(r => movies.push(r.data)))
//   .then(axios.get(url[4])
//   .then(r => movies.push(r.data)))
//   .then(r => {
//     let data = []
//     let i = 0
//     let genres = [];
//     console.log(movies)
//     console.log(movies.length)

//     for(i=0;i<movies.length; i++){
//       genres = [];
//       genres = movies[i].Genre.split(', ');
//       console.log(genres);
//       data.push({
//         title: movies[i].Title,
//         year: movies[i].Year,
//         genres: movies[i].Genre,
//         actors: movies[i].Actors,
//         plot: movies[i].Plot
//       });
//     }

//     Movie.deleteMany()
//       .then(r => {
//           Movie.create(data)
//       })
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

// })
// .then(data => {

// })

//eventually going to have to map through the movie data thing in order to
//seed the genre and person seed info? **************

const mongoose = require("./connection");

const Movie = require("../models/Movie");
let movies = require("./json-files/imdb/imdb-movies.json");

const Review = require("../models/Review");
const reviews = require("./json-files/movie-reviews/reviews.json");

const Rating = require("../models/Rating");



Movie.deleteMany({})
  .then(Movie.create(movies))
  .then(console.log("finsihed seeding movies"))
  .then(
    Review.deleteMany({})
      .then(
        reviews.forEach(review =>
          review.results.forEach(result =>
            Review.create(result).catch(e => console.log(e))
          )
        )
      )
      .then(
        Movie.find({}).then(movies => {
          movies.forEach(movie => {
            Review.find({'display_title': movie.Title}).then(reviews => {
              if (reviews.length > 0) {
                console.log('match!', reviews)
                movie.review.push(...reviews)
                movie.save()
              }
            })
          })
        }))).then(
          Rating.deleteMany({})
          .then(Rating.create(movies))
        )
        .then(Rating.find({}).then(ratings => {
          ratings.forEach(rating => {
            Movie.find({}).then(movies => {
              movies.forEach(movie => {
                if(movie.Title === rating.Title){
                  movie.Rating.push(rating)
                  movie.save().catch(e => console.log(e))
                }
              })
            })
          })
        }))
        










