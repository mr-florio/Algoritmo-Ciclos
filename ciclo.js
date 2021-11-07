let numero = parseInt(
  prompt("Por favor ingresa un número y repasaremos la tabla de multiplicar")
);

for (i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + "X" + i + "=" + resultado);
}

let conesc = prompt(
  "Ahora enséñame alguna frase y yo la repetiré. Si te cansas de jugar solo escribe ESC y dejaré de repetir lo que escribes."
);

while (conesc != "ESC") {
  console.log("Tu escribiste: " + conesc);
  conesc = prompt("¿Tienes alguna otra frase para enseñarme?");
}

alert("¡Genial! Hasta luego.");
