"use strict";

const numberOfFilms = +prompt("Number of films you watch:", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

if(personalMovieDB.count < 10){
    console.log('You watch not to many movies.');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log('You are classic viewer.');
} else if(personalMovieDB.count > 30){
    console.log("You are movieman!");
} else {
    console.log("Error!");
}

for(let i = 0; i < 2; i++){
    let nameMov = prompt("One of the last seen movies?", ""),
    starMov = prompt("How can you describe it?", "");
    if( nameMov != null && starMov != null && nameMov != "" && starMov != "" && nameMov < 50 && starMov < 50){
        personalMovieDB.movies[nameMov] = starMov;
        console.log("Done");
    } else {
        i--;
        console.log("Error");
    }
}

console.log(personalMovieDB);
