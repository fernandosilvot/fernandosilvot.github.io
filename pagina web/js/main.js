function login(){
    var user, password

    user = document.getElementById("user").value;
    password = document.getElementById("contrasena").value;

    if(user == "fernandosilvot" && password == "fernando"){
        window.location = "index2.html";
    } else{
        alert("contraseña incorrecto")
    }
}