/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  return (
    Math.round(
      (movies.reduce((acc, movie) => acc + Number(movie.rate), 0) /
        movies.length) *
        100
    ) / 100
  );
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  if (dramaMovies.length !== 0) {
    return (
      Math.round(
        (dramaMovies.reduce((acc, movie) => acc + Number(movie.rate), 0) /
          dramaMovies.length) *
          100
      ) / 100
    );
  } else {
    return 0;
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
  // return movies
  //   .sort(function(a, b) {
  //     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }

  //     // names must be equal
  //     return 0;
  //   })
  //   .sort((a, b) => a.year - b.year);

  return movies.sort((a, b) => {
    if (a.year - b.year === 0) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    }
    return a.year - b.year;
  });
}

// orderByYear(movies);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  return movies
    .filter(movie => movie.genre.includes("Drama"))
    .filter(movie => movie.director.includes("Steven Spielberg")).length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies
    .map(a => a.title)
    .sort()
    .splice(0, 20);
  //   .filter(a => indexOf(a) < 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  var newmovies = [];
  movies.forEach(element => {
    newElement = JSON.parse(JSON.stringify(element));
    newmovies.push(newElement);
  });
  return newmovies.map(movie => {
    var minuteConverter = function(hourmin) {
      if (hourmin.indexOf("h") !== -1) {
        var hour = hourmin.slice(0, hourmin.indexOf("h"));
      } else {
        var hour = 0;
      }
      var minute = hourmin.slice(hourmin.indexOf("h") + 1, hourmin.length - 3);
      return Number(hour) * 60 + Number(minute);
    };
    movie.duration = minuteConverter(movie.duration);
    return movie;
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  var moviesByYear = movies.reduce(function(moviesByYear, movie) {
    var year = movie.year;
    moviesByYear[year] = moviesByYear[year] || [];
    moviesByYear[year].push(movie.rate);
    return moviesByYear;
  }, {});
  var ratingAvgByYear = {};
  for (var year in moviesByYear) {
    var ratingValue = moviesByYear[year].reduce(function(rating, val) {
      return rating + Number(val);
    }, 0);
    var numberOfMovies = moviesByYear[year].length;
    ratingAvgByYear[year] = ratingValue / numberOfMovies;
  }
  console.log(ratingAvgByYear);
  var maxYear = Object.keys(ratingAvgByYear).reduce((a, b) =>
    ratingAvgByYear[a] > ratingAvgByYear[b] ? a : b
  );

  return `The best year was ${maxYear} with an average rate of ${ratingAvgByYear[maxYear]}`;

  // return moviesByYear;
}

// let movies = [
//   {
//     title: "The Godfather",
//     year: "1972",
//     duration: "2h 24min",
//     rate: "9.3"
//   },
//   {
//     title: "Absolut",
//     year: "1994",
//     duration: "2h 24min",
//     rate: "7.6"
//   },
//   {
//     title: "The Shawshank Redemption",
//     year: "1994",
//     duration: "24min",
//     rate: "9.2"
//   }
// ];

// console.log(bestYearAvg(movies));
