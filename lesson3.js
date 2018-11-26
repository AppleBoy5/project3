/*  Design a program for the Hollywood Movie Rating Guide, in which users continuously enter a value from 0 to 5 that
    indicates the number of stars they are awarding to a movie title they are prompted for. The program executes
    continuously until a user decides to quit. If a user enters a star value that does not fall in the correct range,
    re-prompt the user three (3) times until a correct value is entered. At the end of the program, display the average
    star rating for the movie.

    author:Zackary Paulson
    11/26/18
*/

"use-strict";
const PROMPT= require('readline-sync');


let movieTitle;
let movieRatings= [];
let avgRating=0;

var recResponse= ("How many stars 0-5?");

const MINIMUM_STARS=0, MAXIMUM_STARS=5, MAX_TRIES=3;

function main() {

    getMovieTitle();
    getReviews();
    calculateAverage();
    displayResults();


}
main();

 function getMovieTitle(){
     movieTitle = PROMPT.question('Please Enter A movie Title ');
 }

 function getReviews() {
     let counter=0;

     let error_count = 0;
     while (error_count < MAX_TRIES) {
         try {
             let response = Number(PROMPT.question("Please Enter A Rating 0-5 "));
             /*if (!response.length) {
                 throw "Error : Must Be A Number!"
             }
*/
             if (response >5 ) {
                 throw "Error: Must rating must be less than five!"
             }

             response = Number(response);
             if (isNaN(response)) {
                 throw "Error: Must Be A Number!"
             }
             movieRatings[counter]=response;
             counter++;console.log(response);

         }
         catch (err) {
             error_count++; // This is a shortcut for 'add 1'
             console.log(`${err} Tries remaining: ${MAX_TRIES - error_count}`);
         }

     }
 }
function calculateAverage(){
    for (let i = 0 ; i<movieRatings.length;i++) {
        console.log(movieRatings[i]);
        avgRating = avgRating + movieRatings[i];
        console.log(avgRating);
        }
        console.log(avgRating);
    avgRating = avgRating / movieRatings.length;
}
function displayResults(){
     console.log ("The average star rating for" + movieTitle + " is " + avgRating);
}




