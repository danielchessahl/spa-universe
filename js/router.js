export class Router {

    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)

        this.background()
        this.handle()
    }

 
    handle() {
        const { pathname } = window.location
        const route = this.routes [pathname] || this.routes[404]
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

    background() {
        if(window.location.pathname == '/exploration'){
            document.body.style.backgroundImage = 'url(../assets/exploration.png)'
        } else if (window.location.pathname == '/universe'){
            document.body.style.backgroundImage = 'url(./assets/universe.png)'
        } else{
            document.body.style.backgroundImage = 'url(./assets/home.png)'
        }
    
    }

}