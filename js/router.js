'use strict'

const routes = {
    '/': '/pages/series.html'
}

export const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname;

    const response = await fetch(routes[path]);
    const html = await response.text();

    document.getElementById('root').innerHTML = html
    console.log(html);
}

window.route = route