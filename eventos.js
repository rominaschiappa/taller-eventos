const saludarBtn = document.getElementById("saludarBtn");
const divContainer = document.getElementById("divContainer");
const divBtn = document.getElementById("divBtn");

// Manejador de evento para el botón de saludar
saludarBtn.addEventListener("click", function () {
    alert("Hola!");
});

// Manejador de evento para el botón en el div
divBtn.addEventListener("click", function () {
    alert("Hola! Soy el div");
});