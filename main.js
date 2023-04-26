// Declaración de variantes

let costoNoches = 0
let costoCiudad = 0
let costoCoche = 0
let noches = ""
let diasCoche = ""
let ciudad = ""

// Ingresar nombre

let nombre = prompt("Ingrese su nombre:")

// Funcion para el saludo

function saludo(){
  alert(`Bienvenido ${nombre}, sigue los pasos para calcular los gastos de tu próximo viaje`);
}

let metodoPago = prompt("Elija su método de pago: Credito, Debito")

while (metodoPago == "Credito" || "Debito"){
    let cuotasPago = parseInt(prompt("Elija sus cuotas sin interés (hasta 12 cuotas)"));
    if (cuotasPago <12 ){
        alert(`${nombre}, su pago será financiado en ${cuotasPago} cuotas sin interés.`);
        break;
    } else if(cuotasPago >12 ){
        alert(`${nombre}, la cantidad de cuotas elegidas no están permitidas.
        Eligió ${cuotasPago} cuotas, por favor intente nuevamente.`)
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

function vueloCiudad(){
    ciudad = prompt("Ingresa una ciudades: Buenos Aires, Rio de Janeiro, Montevideo, Santiago");

    costoCiudad = 0

    switch(ciudad){
        case "Buenos Aires":
            costoCiudad = 150
            break;
        case "Rio de Janeiro":
            costoCiudad = 250
            break;
        case "Montevideo":
            costoCiudad = 125
            break;
        case "Santiago":
            costoCiudad = 100
            break;    
    }

    if (costoCiudad <= 0){
        alert("No hay vuelos disponibles para esa ciudad. Intente nuevamente.")
    }else
        alert(`Tu vuelo a ${ciudad} son ${costoCiudad}$`)
    console.log(ciudad);
}

// Funcion para elegir vehiculo y días a utilizar

function alquilerVehiculo(){

    tipoVehiculo = prompt("Seleccione el vehiculo a utilizar: Auto, Camioneta, Moto")
    diasVehiculo = prompt("Ingresa los dias que alquilarás un vehiculo. De 5 a 8 días");

    switch (tipoVehiculo) {
      case "Auto":
        switch(diasVehiculo){
          case "5":
              costoVehiculo = 400
              break;
          case "6":
              costoVehiculo = 450
              break;
          case "7":
              costoVehiculo= 500
              break;
          case "8":
              costoVehiculo = 550
              break;
          case "0":
              costoVehiculo = 0
              break;
      }

      case "Camioneta":
        switch(diasVehiculo){
          case "5":
              costoVehiculo = 500
              break;
          case "6":
              costoVehiculo = 600
              break;
          case "7":
              costoVehiculo= 625
              break;
          case "8":
              costoVehiculo = 700
              break;
          case "0":
              costoVehiculo = 0
              break;
      }

      case "Moto":
        switch(diasVehiculo){
          case "5":
              costoVehiculo = 300
              break;
          case "6":
              costoVehiculo = 350
              break;
          case "7":
              costoVehiculo= 400
              break;
          case "8":
              costoVehiculo = 450
              break;
          case "0":
              costoVehiculo = 0
              break;
          default:
            "Ingrese un valor valido"
      }
    }

    if (costoVehiculo < 0){
        alert("No hay precios disponibles")
        costoCoche = 0
    }
    else
        alert(`Tu precio de alquiler de ${tipoVehiculo} para: ${diasVehiculo} días es de ${costoVehiculo}$`)

    console.log(diasCoche);
}

// Funcion final, resultado de la cotización

function resultado(){
    alert("Días de hotel: " + costoNoche + " || Ciudad destino: " + costoCiudad + " || Días de coche alquilados: " + costoVehiculo);
    suma = costoCiudad + costoVehiculo + costoNoche;
    alert(`${nombre}, su presupuesto final es de: $` + suma);
}



function ejecutarSimulador(){
    saludo();
    hotel();
    vueloCiudad();
    alquilerVehiculo();
    resultado();
    pagoFinal()
}

ejecutarSimulador();




  