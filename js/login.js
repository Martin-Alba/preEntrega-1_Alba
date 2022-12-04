let user = prompt("Ingrese su nombre de usuario.");
let password;

while(user.toLowerCase() != "martin064"){
    alert("El usuario ingresado no existe, ingrese un usuario valido.");
    user = prompt("Ingrese su nombre de usuario.");
}

while(user.toLowerCase() == "martin064"){
    password = prompt("Ingrese su password:");
    if(password == "Mrt.064"){
        alert("Bienvenido "+user+".");
        break;
    }else{
        alert("Usuario y/o contraseña incorrecto, intente nuevamente.");
    }
}