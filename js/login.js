let user = prompt("Ingrese su nombre de usuario.");
let password = prompt("Ingrese su contraseña.");

//! separar while (logea por mas que la contraseña este mal).

while((user.toLowerCase()) != "martin064" && (password != "Mrt.064")){
    alert("Usuario y/o contraseña incorrecto, intente nuevamente");
    user = prompt("Ingrese su nombre de usuario.");
    password = prompt("Ingrese su contraseña.");
}
alert("Bienvenido "+user+".");