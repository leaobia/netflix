'use strict'
console.log('js carregado');



export const btn = () => {

  const inputFilme = document.querySelector('#inputFilme')
  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    console.log(inputFilme.value)
  })

}







