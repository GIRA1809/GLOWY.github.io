// script.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get("producto");
  
    if (productoId) {
      // Aquí podrías cargar dinámicamente la información del producto
      console.log("Producto ID:", productoId);
    }
  });
  