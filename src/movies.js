// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(peli => {
        return peli.director;
    })
    return allDirectors;
  }
//BONUS
  function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(peli => {
        return peli.director;
    })
    const allDirectorsFiltered = allDirectors.filter((item, index) => {
      return allDirectors.indexOf(item) === index
    })
    return allDirectorsFiltered;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length===0){
        return 0
    }
    const spielbergPeliDrama = moviesArray.filter(peli => {
        return peli.director === 'Steven Spielberg' && peli.genre.includes('Drama');
    })
    return spielbergPeliDrama.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length===0){
        return 0
    }
    const totalScore = moviesArray.reduce((acc, currentValue) => {
        if(typeof currentValue.score==='number'){
        return acc + currentValue.score;
        } else {return acc}
              
    },0)
    const scoreAvg = (totalScore/moviesArray.length).toFixed(2);
    return Number(scoreAvg);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(peli => {
      return peli.genre.includes('Drama');
    })
    const dramaScoreAvg = scoresAverage(dramaMovies);
    return dramaScoreAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = [...moviesArray]
    const moviesByTitle = copyMoviesArray.sort((a, b) => {
      if(a.title < b.title)return -1
      if(a.title > b.title)return 1
      if(a.title === b.title)return 0
    })  
    const moviesByYears = copyMoviesArray.sort((a, b) =>{
      if(a.year < b.year)return -1
      if(a.year > b.year)return 1
      if(a.year === b.year)return moviesByTitle
    })
    return moviesByYears
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copyMoviesArray = [...moviesArray]
    let moviesByTitle = copyMoviesArray.sort((a, b) => {
      if(a.title < b.title)return -1
      if(a.title > b.title)return 1
      if(a.title === b.title)return 0
    }) 
    let moviesArray20 = moviesByTitle.splice(0, 20)
    let moviesArray20Title = moviesArray20.map(peli => {
      return peli.title
    })
    return moviesArray20Title
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
