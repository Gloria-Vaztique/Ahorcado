
let diccionario = ["ANIME", "KIKIO", "JAKEN", "SANGO", "KAEDE", "KANNA", "HANYO", "PERRO", "ABAJO",
     "PERLA", "LINDA", "YOKAI", "ÁRBOL", "JAPÓN", "ZORRO", "MANGA", "ARROZ", "NEGRO", "HAORI", 
     "LARGO", "NOCHE", "MONJE"]
let jugadas = 6
let green
const BUTTON = document.getElementById("guess-button" )
console.log(BUTTON)
BUTTON.addEventListener("click", intentar)
function obtenerPalabra() {
    let aleatorio = Math.floor(Math.random() * diccionario.length - 1)
    return diccionario[aleatorio]
}
let palabra = obtenerPalabra()
window.addEventListener("keydown", (e)=>{
    if(e.keyCode===13){
        intentar();
    }
})
function intentar() {
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
    if(INTENTO.length === 5){
        jugadas--
        if (jugadas === 0) {
            terminar("NO LO LOGRASTE, ¡SUERTE EN LA PRÓXIMA!");
        }
        if (palabra === INTENTO) {
           terminar("¡FELICIDADES, GANASTE!") 
        }
        let fila = document.createElement("div")
        fila.className = "row"
        for (let i in INTENTO) {
            let letra = document.createElement("span")
            letra.className = "letter"
            letra.innerText = INTENTO[i]
            fila.appendChild(letra)
            console.log(fila)
            if (INTENTO[i] == palabra[i]) {
                letra.style.background = "blue"
            } else if (palabra.includes(INTENTO[i])) {
                letra.style.background = "purple"
            } else {
                letra.style.background = "grey"
            }
        }
        let grilla = document.getElementById("grid")
        grilla.appendChild(fila)

    }else{
        alert("Ingresar palabra con 5 letras")
    }
}
function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let p = document.getElementById("guesses")
    p.innerHTML = "<h2>" + mensaje + "</h2>"
}
