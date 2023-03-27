//Si tengo 18 años o más puedo entrar al recital de YSY A a que me diga que me ayude solo
//Si tengo menos de 18 años no puedo entrar y tengo que esperar para ayudarme
//Si tengo +40 años no puedo entrar porque no pueden ayudarme a volar

let edad = prompt("Dime tu edad y así podremos verificar si estas apto para VOLAR")
if (edad >= 18) {
    console.log ("Estas apto para entrar para que te digan que te ayudes solo");
} else if (edad < 18) {
    console.log ("No podes entrar y tenes que esperar para ayudarte solo")
} else if (edad >= 40 && edad <= 60) {
    console.log ("Los viejos no pueden entrar a ayudarse a volar")
} else {
    console.log ("Me salió mal y no puedo ayudarme a mi misma, contactaré a Matias para que me ayude a VOLAR")
}