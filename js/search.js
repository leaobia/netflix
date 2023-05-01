'use strict'
console.log('js carregado');



export const btn = () => {

  const inputFilme = document.querySelector('#inputFilme')
  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    console.log(inputFilme.value)
    criaDados()
  })

}





const criaDados = () => {

  const inputFilme = document.querySelector('#inputFilme')
  const name = inputFilme.value
  fetch(`https://www.omdbapi.com/?apikey=d2feea&t=${name}`)
  .then(result => result.json())
  .then(json => {
    console.log(json);
    const containerDados = document.getElementById('dados')
    containerDados.innerHTML = ''

    const div = document.createElement('div')
    div.classList.add('containerimg')

    const h1 = document.createElement('h1')
    h1.textContent = json.Title

    const img = document.createElement('img')
    img.src = json.Poster

    const p = document.createElement('p')
    p.textContent = json.Plot

    const divDados = document.createElement('div')
    divDados.classList.add('containerdados')

    const actors = document.createElement('p')
    actors.textContent = 'Actors: ' + json.Actors

    const director = document.createElement('p')
    director.textContent = 'Director: ' + json.Director

    containerDados.append(div,  divDados)
    div.append(h1,img)
    divDados.append(p, actors,director)
  })
}



