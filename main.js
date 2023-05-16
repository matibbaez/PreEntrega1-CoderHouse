// Declaración de variantes

let costoNoche = 0
let costoCiudad = 0
let costoCoche = 0
let noches = ""
let diasCoche = ""
let ciudad = ""
let costoDeVehiculo;

// Ingresar nombre

let nombre = prompt("Ingrese su nombre:")

// Funcion para el saludo

function saludo(){
  alert(`Bienvenido ${nombre}, sigue los pasos para calcular los gastos de tu próximo viaje`);
};

let metodoPago = prompt("Elija su método de pago: Crédito, Débito").toLowerCase();

if (metodoPago === "debito") {
  alert("Genial, continuemos con la compra:");
  hotel(); // Llamar a la función hotel() si el método de pago es "débito"
} else if (metodoPago === "credito") {
  let cuotasPago;
  while (true) {
    cuotasPago = parseInt(prompt("Elija sus cuotas sin interés (hasta 12 cuotas)"));
    if (cuotasPago < 13) {
      alert(`Su pago será financiado en ${cuotasPago} sin interés.`);
      hotel(); // Llamar a la función hotel() si el método de pago es "crédito"
      break;
    } else {
      alert(`La cantidad de cuotas elegidas (${cuotasPago}) no está permitida. Intente en otro momento.`);
    }
  }
}



// Funcion para ingresar el número de noches

function hotel(){
    noches = prompt("Ingresar número de noches: entre 4 y 8 (si supera esa cantidad el precio será mayor)");

    costoNoche = 0
    
    switch(noches){
        case "4":
            costoNoche = 300
            break;
        case "5":
            costoNoche = 400
            break;
        case "6":
            costoNoche = 500
            break;
        case "7":
            costoNoche = 575
            break;
        case "8":
            costoNoche = 650
            break;
        default:
          costoNoche = 1250
          break;
    }
    
    if (costoNoche <= 0)
        alert("Tu número de noches no esta disponible")
    else
        alert(`Tu número de noches son ${noches} a ${costoNoche}$`)
     console.log(noches);

}

// Funcion para elegir la ciudad indicada

let costoDeCiudad;

function vueloCiudad() {
  const vuelos = [
    { ciudad: "Buenos Aires", costo: 150 },
    { ciudad: "Rio de Janeiro", costo: 250 },
    { ciudad: "Montevideo", costo: 125 },
    { ciudad: "Santiago", costo: 100 }
  ];

  let ciudad = prompt("Ingresa una de las siguientes ciudades: Buenos Aires, Rio de Janeiro, Montevideo y Santiago");

  const vuelo = vuelos.find(function(vuelo) {
    return vuelo.ciudad.toLowerCase() === ciudad.toLowerCase();
  });

  if (!vuelo) {
    alert("Actualmente no hay vuelos disponibles para esa ciudad. Intente nuevamente.");
    vueloCiudad(); // Volver a pedir la ciudad
    return;
  }

  costoDeCiudad = vuelo.costo;

  alert(`Tu vuelo a ${vuelo.ciudad} cuesta ${costoDeCiudad}$`);
  console.log(vuelo.ciudad);
}

let vueloConfirmacion = "";

do {
  vueloCiudad();

  vueloConfirmacion = prompt("¿Desea continuar?").toLowerCase();

  if (vueloConfirmacion === "si") {
    alert("De acuerdo, continuemos:");
    alquilerVehiculo();
    resultado();
    break; // Salir del ciclo después de llamar a alquilerVehiculo() y resultado()
  } else if (vueloConfirmacion === "no") {
    alert("De acuerdo.");
    break; // Salir del ciclo si la respuesta es "no"
  } else {
    alert("Respuesta inválida. Por favor, responda 'si' o 'no'.");
  }
} while (vueloConfirmacion !== "no");



// Funcion para elegir vehiculo y días a utilizar

function alquilerVehiculo() {
  const vehiculos = {
    auto: {
      nombre: "Auto",
      costos: [400, 450, 500, 550]
    },
    camioneta: {
      nombre: "Camioneta",
      costos: [500, 600, 625, 700]
    },
    moto: {
      nombre: "Moto",
      costos: [300, 350, 400, 450]
    }
  };

  const tipoVehiculo = prompt("Seleccione el vehiculo a utilizar: Auto, Camioneta, Moto");
  const diasVehiculo = prompt("Ingresa los dias que alquilarás un vehiculo. De 5 a 8 días");

  const vehiculoSeleccionado = vehiculos[tipoVehiculo.toLowerCase()];

  if (!vehiculoSeleccionado) {
    alert("Tipo de vehículo inválido. Intente nuevamente.");
  } else {
    const indexCosto = parseInt(diasVehiculo) - 5;
    costoDeVehiculo = vehiculoSeleccionado.costos[indexCosto];
    if (!costoDeVehiculo) {
      alert("Número de días inválido. Intente nuevamente.");
    } else {
      alert(`Tu precio de alquiler de ${vehiculoSeleccionado.nombre} para ${diasVehiculo} días es de: ${costoDeVehiculo}$`)
    }
  };
};

// Funcion final, resultado de la cotización

function resultado(){
  alert("Días de hotel: " + costoNoche + " || Ciudad destino: " + costoDeCiudad + " || Días de coche alquilados: " + costoDeVehiculo);
  suma = costoDeCiudad + costoDeVehiculo + costoNoche;
  alert(`${nombre}, su presupuesto final es de: $` + suma);
};

function ejecutarSimulador(){
  saludo();
  hotel();
  vueloCiudad();
  alquilerVehiculo();
  resultado();
};

ejecutarSimulador();





  