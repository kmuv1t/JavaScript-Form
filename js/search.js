var addButton = document.querySelector("#buscar-pacientes");
addButton.addEventListener("click",function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var ans = xhr.responseText;
            var pacientes = JSON.parse(ans);
            pacientes.forEach(function(paciente){
                addPacientTable(paciente);
            });
        }else{
            var err = document.querySelector("#ajax-error");
            err.classList.remove("hideUser");
        }
    });
    xhr.send();
});