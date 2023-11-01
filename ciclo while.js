// Cuando NO sepa exactamente las veces que voy a repetir depende de una operación

let número = 1
let suma = 0
while (suma <= 100) {
  suma += número
  número++
}
console.log('los primeros ' + número + ' suman: ' + suma)
