'use strict'



const testando =  () => {
    const batman = 'Batman'
    fetch(`https://www.omdbapi.com/?apikey=d2feea&t=${batman}`)
    .then(result => result.json())
    .then(json => console.log(json))
}

testando()