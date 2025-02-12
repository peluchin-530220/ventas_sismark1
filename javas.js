function comprar(event) {
    event.stopPropagation();
    let producto = event.target.closest(".producto");
    let nombre = producto.querySelector("h3").textContent;
    let precio = producto.querySelector(".precio").textContent;
    let imagen = producto.querySelector("img").src;
    let mensaje = `Hola, estoy interesado en comprar la ${nombre} con un precio de ${precio}. ¿Está disponible?\n\nAquí está la imagen del producto: ${imagen}`;
    let numeroWhatsApp = "+59169367079"; // Tu número de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

function mostrarDetalles(producto) {
    let imagen = producto.querySelector(".imagen-producto");
    let detalles = producto.querySelector(".producto-detalles");
    if (imagen.style.display === "none") {
        imagen.style.display = "block";
        detalles.style.display = "none";
    } else {
        imagen.style.display = "none";
        detalles.style.display = "block";
    }
}
 // Agregar clase "scrolled" cuando el usuario baja
window.addEventListener("scroll", function () {
let navbar = document.querySelector(".navbar");
if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
} else {
    navbar.classList.remove("scrolled");
}
});