const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

// Al principio el boton Book Now estara visible
CTA.classList.remove("hide");

// El mensaje de Sorry about that esta oculto al principio
ALERT.classList.add("hide");

// En la funcion se intercambian los valores de hide en los dos
// elementos obtenidos en las constantes
function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
    console.log("CTA.className -> El boton Book Now!: ", CTA.className)
    console.log("ALERT.className -> Las letras Sorry about that!: ", ALERT.className)
}

// Cuando se agrega la funcion en un evento no debe tener
// los parentesis
CTA.onclick = reveal
