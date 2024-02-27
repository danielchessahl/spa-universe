import { Router } from "./router.js";

const btnHome = document.querySelector('.btnHome')
const btnUniverse = document.querySelector('.btnUnverse')
const btnExploration = document.querySelector('.btnExploration')

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

btnHome.addEventListener('click', function () {
  router.route()

})

btnUniverse.addEventListener('click', function () {
  router.route()

})

btnExploration.addEventListener('click', function(){
  router.route()
  
})