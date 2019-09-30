# Project 2 Movie API

This API project displays a list of movies, including their title, year, genres, etc. The data for this project was retrieved from two databases. The first one is the [OMDb API](http://www.omdbapi.com/#top). The Open Movie Database (OMDb) API is "a RESTful webservice to obtain movie information." The second database is [The New York Times Developer Network](https://developer.nytimes.com/). The NYT Developer API stores a list of several API's, including a movie review API, which is the one I used for this project.

## Endpoints
The [deployed API address](https://movieapi2.herokuapp.com/) also contains two endpoints: 
/review and /rating. For the two endpoints, the user can only see a list of all of the reviews and ratings, respectively. However, with the list of movies, which can be accessed when opening the deployed API address, there is full CRUD. 

<br/><br/>
Example of the review and rating endpoint results:
<img align="center" src="https://i.imgur.com/DZxr4a6.png" width="100%" height="80%" >
<img align="center" src="https://i.imgur.com/EGASWj4.png" width="100%" height="80%" >
<br/><br/>

## Technologies Used
- JavaScript
- Node.js
- Express
- Mongoose
- MongoDB
- MongoDB Atlas
- Heroku

## Installation Instructions
1) Fork and clone down this project repository 
2) Install all dependencies locally using npm install, etc.
3) Start up your server and navigate to the indicated port number in your browser
4) Use the seed.js file to seed your database
