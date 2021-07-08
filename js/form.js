var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-add");

    var paciente = objetoPaciente(form);

    if(!validaPaciente(paciente)){
        var msgErro = document.querySelector("#msg-erro")
        msgErro.textContent = "Invalid Form!";
        return;
    }

    addPacientTable(paciente);

    var msgErro = document.querySelector("#msg-erro");
    msgErro.innerHTML = "";
    form.reset();
})

function addPacientTable(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function validaPaciente(paciente){
    if(!paciente.nome || !paciente.gordura){
        return false;
    }
    if(validaPeso(paciente.peso) && validaAltura(paciente.altura)){
        return true;
    }
    else{
        return false;
    }
}

function objetoPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
