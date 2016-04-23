// Declarar variables
var nombre = 'Juan';
edad = 19;

// Condicionales
if (edad > 18) {
  alert('Es mayor de edad');
} else {
  alert('Es menor de edad');
}

// Cases
seguridad = prompt('Nivel de seguridad (0 a 3): ');
switch (seguridad) {
  case '0':
    alert('Seguridad nula');
    break;
  case '1':
    alert('Seguridad baja');
    break;
  case '2':
    alert('Seguridad media');
    break;
  case '3':
    alert('Seguridad alta');
    break;
  default:
    alert('Nivel inexistente');
}

// Funciones
numero = prompt('Numero para factorial: ');
var factorial = function(numero){
  factorial = 1;
  for (numero; numero > 0; numero--) {
    factorial *= numero;
  }
  return factorial;
}
alert(factorial(numero));

// Funciones v2
function factorial2(numero){
  factorial = 1;
  for (numero; numero > 0; numero--) {
    factorial *= numero;
  }
  alert(factorial);
}
factorial2(numero);
