window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start(){  
    inputName = document.querySelector('#nameInputId');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             {
    paraDeRecarregar();
    ativarInput();
}   

    function paraDeRecarregar(){
        function funcaoprasubmit(event){
        event.preventDefault();
        }
        var form = document.querySelector('form');
        form.addEventListener('submit', funcaoprasubmit);
    }
}

function ativarInput(){
    inputName.focus();
}

