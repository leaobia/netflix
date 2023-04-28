'use strict'



const testando =  () => {

    const batman = ['Barbie', 'Batman', 'Vingadores']
    batman.forEach((item) =>{
        fetch(`https://www.omdbapi.com/?apikey=d2feea&t=${item}`)
        .then(result => result.json())
        .then(json => console.log(json))
    }
   
)}

testando()