//* duracion de carrera
let raceTime = prompt("Ingrese los minutos de carrera:") * 60;
console.log(raceTime);

//* tiempo de vuelta en segundos
let minuteLap;
let secondsLap;

let lapTime = (minuteLap = (parseInt(prompt("Ingrese los minutos del tiempo de vuelta:") * 60)) + (secondsLap = parseInt((prompt("Ingrese los segundos del tiempo de vuelta")))));
console.log(lapTime);

//* consumo de combustible por vuelta
let fuelLap = parseFloat(prompt("Ingrese el consumo por vuelta:"));

//* vueltas totales de carrera
let totalLaps = parseFloat(raceTime / lapTime);
console.log(totalLaps.toFixed(1)+" laps.");

//* combustible total con o sin media vuelta extra
let halfLap = parseFloat(fuelLap * 0.5);
console.log("media vuelta "+halfLap);
let totalFuel = prompt("¿Quieres agregar combustible para media vuelta extra? (s = si / n = no)");

switch(totalFuel){
    case "s":
        totalFuel = parseFloat((totalLaps * fuelLap) + (halfLap));
        break;
    case "n":
        totalFuel = parseFloat(totalLaps * fuelLap);
        break;
}
alert("El combustible total para finalizar la carrera es: "+totalFuel.toFixed(1));