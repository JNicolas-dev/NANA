const texto = "Siempre voy a estar aquí para ti, incluso cuando el mundo se sienta pesado.";
let i = 0;
function escribir(){
if(i < texto.length){
document.getElementById("mensaje").innerHTML += texto.charAt(i);
i++;
setTimeout(escribir, 50);
}
}
escribir();

document.addEventListener("DOMContentLoaded", function(){

const corazon = document.getElementById("corazon");

const forma = [
[0,1,1,0,1,1,0],
[1,1,1,1,1,1,1],
[1,1,1,1,1,1,1],
[0,1,1,1,1,1,0],
[0,0,1,1,1,0,0],
[0,0,0,1,0,0,0]
];

let pixels = [];

forma.forEach(fila=>{
    fila.forEach(valor=>{
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        if(valor === 1){
            pixels.push(pixel);
        }

        corazon.appendChild(pixel);
    });
});
let j = 0;

function animarCorazon(){
    if(j < pixels.length){
        pixels[j].classList.add("activo");
        j++;
        setTimeout(animarCorazon, 80);
    }
}
setTimeout(animarCorazon, 1000);
});

