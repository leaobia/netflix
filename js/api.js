'use strict'

const fetchAPI = () => {

  const fetchDados = fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
    .then(response => response.json())
    .then(data => {
      var titles = data.map(movie => movie.title).slice(0, 2).sort(() => Math.random() - 0.5);

      titles.forEach((item) => {
        fetch(`https://www.omdbapi.com/?apikey=d2feea&t=${item}`)
          .then(result => result.json())
          .then(json => {
            console.log(json);
          });
      })
    })
}

fetchAPI()
