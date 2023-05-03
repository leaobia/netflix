'use strict'

import {btn} from'./search.js'
import {fetchAPI} from'./api.js'

const routes = {
    '/' : 'index.html',
    '/catalogo' : 'pages/catalogo.html',
    '/search' : 'pages/search.html'

}

const route = async ()  => {
   

    window.event.preventDefault()
    window.history.pushState({}, "" , window.event.target.href)
    const path = window.location.pathname
    
    const response = await fetch(routes[path])
    const html = await response.text()
    
    const root = document.getElementById('root').innerHTML = html

    if(window.location.pathname == '/search'){
        btn()
      }else if(window.location.pathname == '/catalogo'){
        fetchAPI()
      }
    
}


window.route = route