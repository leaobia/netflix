'use strict'


// Função que exporta o ato de clicar no botão, dar o blur ou clicar na tecla Enter


export const btn = () => {

  const inputFilme = document.querySelector('#inputFilme')
  const button = document.getElementById('button')


  button.addEventListener('click', () => {
    criaDados()
  })

  inputFilme.addEventListener('blur', function (e) {
    criaDados(e)
  });

  inputFilme.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
      this.blur()
    }
  });

}


// Criando web component chamado movie-search-result


class MovieSearchResult extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    this[nameAttr] = newValue
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.component());
    this.shadowRoot.appendChild(this.styles());
  }

  styles() {
    const css = document.createElement('style')
    css.textContent = `
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    .d-flex{
      height: 100%;
      width: 100%;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4%;
    }
    
    .containerimg{
      display: flex;
      flex-direction: column;
      gap: 20px;
  }
  
  .containerdados{
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
  }

  p{
    font-size: clamp(1rem, 0rem + 3.2vw, 1.8rem);
  }
    
  @media (max-width:500px) {


    .d-flex{
        flex-direction: column;
        gap: 30px;
    }

    .containerdados{
        max-width: 90%;
        text-align: center;
    }
    
}

    `
    return css;
}

  component(){
    const container = document.createElement('div');
    container.classList.add('d-flex')

    if (this.jsonData && this.jsonData.Response == 'False') {
      const p = document.createElement('p');
      p.textContent = "Filme não encontrado! \n Verifique se digitou corretamente.";

      container.append(p);
    } else if (this.jsonData) {
      const div = document.createElement('div');
      div.classList.add('containerimg');

      const h1 = document.createElement('h1');
      h1.textContent = this.jsonData.Title;

      const img = document.createElement('img');
      img.src = this.jsonData.Poster;

      const p = document.createElement('p');
      p.textContent = this.jsonData.Plot;

      const divDados = document.createElement('div');
      divDados.classList.add('containerdados');

      const actors = document.createElement('p');
      actors.textContent = 'Actors: ' + this.jsonData.Actors;

      const director = document.createElement('p');
      director.textContent = 'Director: ' + this.jsonData.Director;

      container.append(div, divDados);
      div.append(h1, img);
      divDados.append(p, actors, director);
    }

    return container;
  }

  // função que define o comportamento do movie-search-result de acordo com os dados do json

  set movieData(json) {
    this.jsonData = json;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this.component());
    this.shadowRoot.appendChild(this.styles());
  }
}

customElements.define('movie-search-result', MovieSearchResult);



// Função que faz o fetch da API e em seguida ativa o resultado do filme

const criaDados = () => {
  const inputFilme = document.querySelector('#inputFilme')
  const name = inputFilme.value
  fetch(`https://www.omdbapi.com/?apikey=d2feea&t=${name}`)
    .then(result => result.json())
    .then(json => {
      const movieResult = document.querySelector('movie-search-result');
      movieResult.movieData = json;
    })
}

