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

/*Para acessar urls dos botões*/
function acessarUrl(url) {
    window.open(url, '_blank');
}

//Pegar elemento body
const body = document.getElementById('body');

//Pegar o nome da classe do elemento body
let modo;

/*Alterar modo de cor do site*/
function alterarModo() {
    modo = body.className;

    //Se modo escuro alterar para claro
    if (modo === 'dark') {
        body.className = 'light';
        modoLight()
    } else if (modo === 'light') {
        body.className = 'dark';
        modoDark();
    }

    console.log(modo);
}

/*Variáveis utilizadas nos modos*/
let img = document.getElementById('img-capa');

/*Função para alterar elementos da página*/
function modoDark() {
    console.log(modo);
    /*Troca de imagem de capa*/
    img.src = 'img/capa-michael-2.png';
}

function modoLight() {
    console.log(modo);
    /*Troca de imagem de capa*/
    img.src = 'img/capa-michael.png';
}