'use strict'

/********************************************************
 * Autora: Bianca Leão
 * Objetivo: Dar o fetch da API
 * O que aprendi: DOMContentLoad, .sort(() => Math.random() - 0.5);
 */


import './router.js'


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
                if(json.Poster == undefined || json.Poster == null || json.Poster == 'N/A' || json.Title == 'Follow the Leader'){
                  console.log('imagem ignorada por não se encaixar nos padrões do site');
                } else {
                  const itemDiv = document.createElement('div');
                  itemDiv.classList.add('item');

                  const span = document.createElement('span')
                  span.textContent = json.Title
          
                  const img = document.createElement('img');
                  img.src = json.Poster;
                  img.alt = json.Title
    
                  itemDiv.append(span, img);
                  cardContainer.appendChild(itemDiv);
                }
              });
          });
        });
    });
  }

  fetchAPI();
});








     // a.onclick = function() {
                 //   route('/pages/azul.html');
                 // };  
                //  console.log(a.href);
                //  a.onclick= route()