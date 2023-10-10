// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(peli => {
        return peli.director;
    });
    return allDirectors;
  };

  function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(peli => {
        return peli.director;
    });
    const allDirectorsFiltered = allDirectors.filter((item, index) => {
      return allDirectors.indexOf(item) === index
    });
    return allDirectorsFiltered;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergPeliDrama = moviesArray.filter(peli => {
        return peli.director === 'Steven Spielberg' && peli.genre.includes('Drama');
    });
    return spielbergPeliDrama;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScore = moviesArray.reduce((acc, currentValue) => {
        return acc + currentValue.score;      
  },0);
    const scoreAvg = (totalScore/moviesArray.length).toFixed(2);
    return scoreAvg;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(peli => {
      return peli.genre.includes('Drama');
    });
    const dramaScoreAvg = scoresAverage(dramaMovies);
    return dramaScoreAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
