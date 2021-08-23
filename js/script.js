"use strict";

const numberOfFilms = +prompt("Number of films you watch:", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

let nameMov = prompt("One of the last seen movies?", ""),
    starMov = prompt("How can you describe it?", "");

personalMovieDB.movies[nameMov] = starMov;

nameMov = prompt("One of the last seen movies?", ""),
starMov = prompt("How can you describe it?", "");

personalMovieDB.movies[nameMov] = starMov;

console.log(personalMovieDB);
