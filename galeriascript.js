const images = [
    "doll.jpg",
    "Cuadro.jpg",
    "Nutcracker.jpg"
  ];
  
  const sliderImage = document.querySelector(".slider-image");
  const anteriorButton = document.querySelector(".anterior");
  const siguienteButton = document.querySelector(".siguiente");
  
  let currentImageIndex = 0;
  
  function mostrarImagen() {
    const imagePath = images[currentImageIndex];
    sliderImage.src = imagePath;
  }
  
  function cambiarImagenSiguiente() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    mostrarImagen();
  }
  
  function cambiarImagenAnterior() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    mostrarImagen();
  }
  
  anteriorButton.addEventListener("click", cambiarImagenAnterior);
  siguienteButton.addEventListener("click", cambiarImagenSiguiente);
  
  mostrarImagen();
  const toggleButton = document.querySelector(".toggle-button");
const imageGallery = document.querySelector(".image-gallery");
const imageSlider = document.querySelector(".image-slider");

toggleButton.addEventListener("click", () => {
    imageGallery.classList.toggle("hide");
    imageSlider.classList.toggle("show");

    if (toggleButton.textContent === "Mostrar Slider") {
        toggleButton.textContent = "Mostrar Galería";
    } else {
        toggleButton.textContent = "Mostrar Slider";
    }
});