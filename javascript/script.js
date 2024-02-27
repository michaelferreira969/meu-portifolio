class Controller {
    constructor() {
        const btnMobile = $('#btn-mobile');
    }

    _events() {
        const _ = this; 

        $("#btn-mobile").on("click", function() { _._ToggleMenu($(this)); });

        //Aciona mais rápido
        $("#btn-mobile").on("touchstart", function() { _._ToggleMenu($(this)); });

        $("#btn-link").on("click", function() { _._AcessarUrl($(this)); });
    }

    _ToggleMenu(event) {
        /*Para corrigir erro do touchstart de fechar e abrir*/
        if (event.type === 'touchstart') event.preventDefault();
    
        const nav = $('#nav');
        
        /*Adicione caso não tenha, remova caso tenha*/
        nav.classList.toggle('active'); 
        
        /*Para os leitores de tela*/
        const active = nav.classList.contains('active');
        $(event.currentTarget).prop('aria-expanded', active);
        if (active)
            $(event.currentTarget).prop('aria-label', 'Fechar Menu');
        else
            $(event.currentTarget).prop('aria-label', 'Abrir Menu');
    }

    _AcessarUrl(url){
        window.open(url, '_blank');
    }

    _AlterarModo() {
        //Pegar elemento body
        const body = $('body');

        //Pegar o nome da classe do elemento body
        let modo;

        modo = body.className;

        let img = $('#img-capa');

        //Se modo escuro alterar para claro
        if (modo === 'dark') {
            body.className = 'light';
            img.src = 'img/capa-michael.png';
        } else if (modo === 'light') {
            body.className = 'dark';
            img.src = 'img/capa-michael-2.png';
        }
    }

}(function () { new Controller() })