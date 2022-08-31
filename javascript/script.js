const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    /*Para corrigir erro do touchstart de fechar e abrir*/
    if (event.type === 'touchstart') event.preventDefault();

    /*Selecionar Nav*/
    const nav = document.getElementById('nav');

    /*Adicione caso não tenha, remova caso tenha*/
    nav.classList.toggle('active'); 
    
    /*Para os leitores de tela*/
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

/*Para que ao clicar acione*/
btnMobile.addEventListener('click', toggleMenu);

/*Para que ao clicar acione mais rápido*/
btnMobile.addEventListener('touchstart', toggleMenu);