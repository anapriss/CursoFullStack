window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start(){  
    inputName = document.querySelector('#nameInputId');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             {
    paraDeRecarregar();
    ativarInput();
    render();
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
    function insertName(typedName){
        globalNames.push(typedName);
    }    
    function digitar(){
        
        if (event.key=='Enter'){
            insertName(event.target.value);
        }
    }
    inputName.addEventListener('keyup', digitar);
    inputName.focus();
}

function render(){
    var divNames = document.querySelector('#names');
//criar ul
//Fazer n li's conforme o tamanho do globalNames
    var ul = document.createElement('ul');
    
    for (var i = 0; i < globalNames.length;i++){
        var currentName = globalNames[i];

        var li = document.createElement('li');
        li.textContent = currentName;
        ul.appendChild(li);
    }
    divNames.appendChild(ul);
}






