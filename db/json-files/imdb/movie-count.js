// const fs = require('fs')

// const movieList1 = require("./imdb-movie-list.json");
// const movieList2 = require("./imdb-movie-list2.json");

// let movieList = [];

// movieList1.forEach((movie, i) => {
//   if (movie.Genre !== "Adult" && movie.Type == "movie") {
//     movieList.push(movie);
//   }
//   return i++;
// });
// movieList2.forEach((movie, i) => {
//   if (movie.Genre !== "Adult" && movie.Type == "movie") {
//     movieList.push(movie);
//   }
//   return i++;
// });
// fs.writeFile('imdb-movies.json',JSON.stringify(movieList),
//     (err)=> console.log(err))

const movies = require('./imdb-movies.json')


movies.forEach((movie,i ) => {
    console.log(movie,i)
    return i++
})


