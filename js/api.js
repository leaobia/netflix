'use strict'

/********************************************************
 * Autora: Bianca Leão
 * Objetivo: Dar o fetch da API
 * O que aprendi: DOMContentLoad, .sort(() => Math.random() - 0.5);
 */

document.addEventListener('DOMContentLoaded', () => {
  const link = document.querySelector('#linkCatalogo');


  const fetchAPI = () => {
    link.addEventListener('click', () => {
      fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
        .then(response => response.json())
        .then(data => {

          const titles = data.map(movie => movie.title).slice(0, 20).sort(() => Math.random() - 0.5);
          const cardContainer = document.querySelector('.card-container'); 
    
          titles.forEach((item) => {
            fetch(`https://www.omdbapi.com/?apikey=d2feea&t=${item}`)
              .then(result => result.json())
              .then(json => {
                if(json.Poster == undefined || json.Poster == null || json.Poster == 'N/A'){
                  console.log('erro');
                } else {
                  const itemDiv = document.createElement('div');
                  itemDiv.classList.add('item');
    
                  const img = document.createElement('img');
                  img.src = json.Poster;
    
                  itemDiv.appendChild(img);
                  cardContainer.appendChild(itemDiv);
                }
              });
          });
        });
    });
  }

  fetchAPI();
});
