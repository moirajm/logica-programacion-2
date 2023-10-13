const prompt = require('prompt-sync')();
//
let input = prompt("Ingresa tu temperatura en celsius: ");
let celsius = parseInt(input);

//
if (!isNaN(celsius)){
  let fahrenheit = (celsius * 9/5) + 32;
  let kelvin = celsius + 273.15;

  console.log([celsius] + " " + "grados celsius son equivalentes a" + " " +[fahrenheit] + " " + "grados fahrenheit.");
  console.log([celsius] + " " + "grados celsius son equivalentes a" + " " +[kelvin] + " " + "grados kelvin.");
} else {
  console.log("Por favor, ingrese un numero valido.")
}

//DOM
const resultadoDOM = document.getElementById("resultado");
  resultadoDOM.innerHTML = 
    [celsius] + " " + "grados celsius son equivalentes a" + " " +[fahrenheit] + " " + "grados fahrenheit." <br>
  console.log([celsius] + " " + "grados celsius son equivalentes a" + " " +[kelvin] + " " + "grados kelvin.";
}

