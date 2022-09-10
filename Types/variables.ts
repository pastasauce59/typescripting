//Typescript annotations

let movieTitle: string = 'The Lion King'
movieTitle = 'Aladdin'
movieTitle = 9
movieTitle.toUpperCase()

let numCatLives: number = 9
numCatLives += 1
// numCatLives = 'zero'

let gameOver: boolean = true
gameOver = false
gameOver = 'true'



//Type inference
let tvShow = 'Gundam Wing'
tvShow = false

let isFunny = false
isFunny = true
isFunny = 'asd'

let once = true

isFunny = once



// any - the any type
let thing: any = "hello"
thing = 1
thing = false
thing = []
thing()
thing.toUpperCase()

// ^ all extra checks from typescripy are gone with the any type - use sparringly



// example of when you might actually want to use any type
const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus']
let foundMovie;
// let foundMovie: string

for(let movie of movies){
    if(movie === 'The Thing'){
        foundMovie = movie
    }
}
foundMovie()
foundMovie = 1