console.log("Carregando de um arquivo externo.")
var titulo = document.querySelector(".titulo")

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    if(!validaPeso(peso)){
        paciente.querySelector(".info-imc").textContent = "Erro!";
        paciente.classList.add("paciente-invalido")
    }else if(!validaAltura(altura)){
        paciente.querySelector(".info-imc").textContent = "Erro!";
        paciente.classList.add("paciente-invalido")
    }else{
        var imc = calculaImc(peso,altura);
        paciente.querySelector(".info-imc").textContent = imc;
    }
}

function validaPeso(peso){
    if(peso > 0 && peso <= 300){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 2.5){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
