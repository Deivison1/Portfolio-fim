
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 50) {
  header.classList.add('scroll-header')
}else {
  header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader);

           
            // ====== Tema Escuro ====== //

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Tema selecionado anteriormente (se o usuário for selecionado)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe dark-theme

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bxs-moon' : 'bx bxs-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bxs-moon' ? 'add' : 'remove'](iconTheme)
};

  // Ative/desative o tema manualmente com o botão
  themeButton.addEventListener('click', () => {

    // Adicione ou remova o tema escuro / ícone

  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
    
    //Salvamos o tema e o ícone atual que o usuário escolheu
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())

});

/*========= SHOW-MENU ========*/


const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav--close');
       
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  });
}if(navClose){
  navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
  });
}
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav--menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ==== Animações com ScrollReaveal =====//

const sr = ScrollReveal({

    origin: 'top',
    distance: '68px',
    duration: 2500,
    delay: 400,
    reset: true 
})

sr.reveal('.home-descricao, .titulo', {delay: 500, origin:'left'})
sr.reveal('.skill', {delay: 600, origin:'left', interval: 100})
sr.reveal('.caixa-project', {delay: 700, interval:100})
sr.reveal('.nbvki', {delay: 700, origin: 'left'})

