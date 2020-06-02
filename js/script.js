'use strict';


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "23");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "23");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let howMovies = prompt("Один из последних просмотренных фильмов?", ""),
                ratingMovies = prompt("На сколько оцените его?", "8.1");
            
            if (howMovies != null && howMovies !== "" && howMovies.length < 50 && ratingMovies != null &&
                ratingMovies !== "" && ratingMovies.length < 50) {
                personalMovieDB.movies[howMovies] = ratingMovies;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            document.write("Просмотрено довольно мало фильмов");
        }
        else if (personalMovieDB.count < 30) {
            document.write("Вы классический зритель");
        }
        else if (personalMovieDB.count > 30) {
            document.write("Вы киноман");
        } else {
            document.write("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            return;
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == null || genre == "" || genre <= 5) {
                console.log('вы ввели некорректные данные');
                i--
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();