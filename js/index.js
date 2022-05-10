const checkbox = document.getElementById('chk')

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light-mode')
})

const sr = ScrollReveal({

    origin: 'top',
    distance: '68px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal('.container-conteudo',{interval: 50})
sr.reveal('.conteudo-img', {delay: 500, interval: 50})
sr.reveal('.paragrato-conteudo', {delay: 600, interval: 50})
sr.reveal('.caixa-project', {delay: 700, interval: 50})
sr.reveal('.nbvki', {delay: 800, origin: 'left', interval: 20})

