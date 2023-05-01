'use strict'

import {btn} from'./search.js'

const routes = {
    '/' : 'pages/home.html',
    '/vermelho' : 'pages/vermelho.html',
    '/azul' : 'pages/azul.html'

}

const route = async ()  => {
   

    window.event.preventDefault()
    window.history.pushState({}, "" , window.event.target.href)
    const path = window.location.pathname
    
    const response = await fetch(routes[path])
    const html = await response.text()
    
    const root = document.getElementById('root').innerHTML = html

    if(window.location.pathname == '/azul'){
        btn()
      }
    

}


window.route = route