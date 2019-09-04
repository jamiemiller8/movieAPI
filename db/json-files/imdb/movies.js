const axios = require('axios');
const fs = require('fs')
let moviesList = []
apiKey = '6a0d2ef3'
apiKey2 = 'b9695768'



for(let i =0; i < 400; i++){
    let url =   `http://www.omdbapi.com/?i=tt${1200001 + i}&apikey=${apiKey2}`

    axios.get(url).then(response => {
        moviesList.push(response.data)
    })
    .then(() => fs.writeFile('imdb-movie-list2.json',JSON.stringify(moviesList),
    (err)=> console.log(err)))
    .catch(e => console.log(e))
}