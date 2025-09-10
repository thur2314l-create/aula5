function cadastro() {
    alert("cadastro feito com sucesso")
}
function login(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "Arthur" && senha == "1234"){
        window.location = "./inicial.html"
    } else {
        alert("usuario ou senha incorreta! tente novamente")
    }

}