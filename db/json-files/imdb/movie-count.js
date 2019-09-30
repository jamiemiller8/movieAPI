const movies = require('./imdb-movies.json')


movies.forEach((movie,i ) => {
    console.log(movie,i)
    return i++
})


