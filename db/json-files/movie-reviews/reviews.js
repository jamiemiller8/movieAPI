const axios = require('axios');
const fs = require('fs')
let apiKey = 'sfJDt1IllqnM8MfaKECGPgHTj7bmJch1'
const movies = require("../imdb/imdb-movies.json")

let reviews = []


movies.forEach(movie =>{
    url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie.Title}&api-key=${apiKey}`
    axios.get(url).then(response => {
        reviews.push(response.data)
    })
    .then(() => fs.writeFile('reviews.json',JSON.stringify(reviews),
    (err)=> console.log(err)))
    .catch(e => console.log(e))
})
