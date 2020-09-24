 
//Esse menu mobile pode ser feito de tres formas!

const menuMobile = document.querySelector('#icon')
const nav = document.querySelector('#nav-list')

menuMobile.addEventListener("click", () =>{
  nav.classList.toggle('show')
})

const links = document.querySelectorAll('#nav-list li a') //capturando todos os links "a"

for(link of links){ //Percorrendo todos os links quando houver o click em algum link, a classe será removida.
  link.addEventListener("click", () =>{
    nav.classList.remove('show')
  })
}

// Forma - 2 
// document.querySelector('#icon').addEventListener("click", function(){
//   document.getElementById('btn').classList.toggle('show') //coloca e retira classe show

//   //Ao clicar em um link do menu, a classe .show será removida
//   var links = document.querySelectorAll('.menu-principal li a')
//   for(i=0; i < links.length; i++){
//     links[i].onclick = function(){
//       document.getElementById('btn').classList.remove('show')
//     }
//   }
// })

// Forma - 3 (Para ativar a forma 3, basta inserir o evento de click com o nome da função onclick="menuMobile()" na tag <i>)
// function menuMobile(){
//   document.getElementById('btn').classList.toggle("show")
//   var links = document.querySelectorAll('.menu-principal li a')
//   for(i=0; i < links.length; i++){
//    links[i].onclick = function(){
//     document.getElementById('btn').classList.remove('show')
//    }
//   }
// }
