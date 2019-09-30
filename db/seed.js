const Movie = require("../models/Movie");
let movies = require("./json-files/imdb/imdb-movies.json");

const Review = require("../models/Review");
const reviews = require("./json-files/movie-reviews/reviews.json");

const Rating = require("../models/Rating");



Movie.deleteMany({})
  .then(()=>Movie.create(movies))
  .then(()=> console.log("finsihed seeding movies"))
  .then(()=>
    Review.deleteMany({})
      .then(()=>
        reviews.forEach(review =>
          review.results.forEach(result => 
            {
              if (result) {
                Review.create(result)
                .then(r => console.log(r))
                .catch(e => console.log(e))
              } 
            }
          )
        )
      )
      .then(()=>
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
        }))).then(()=>
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
        