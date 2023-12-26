import React from 'react';

const Carousel = () => {
  return (
    
    
    
    <nav class="carrusel">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
        <img className="d-block w-100" src="https://www.gezatek.com.ar/uploads/22-12-2023-11-12-59-2200x600-Portafolio-ROG.jpg" alt="First slide" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
        <img className="d-block w-100" src="https://www.gezatek.com.ar/uploads/26-12-2023-09-12-04-22-11-2023-01-11-02-20-09-2023-04-09-24-CM_W37_GENERAL_WB_.jpg" alt="Second slide" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
        <img className="d-block w-100" src="https://www.gezatek.com.ar/uploads/26-12-2023-09-12-26-Sin-t%C3%ADtulo-1.png" alt="Third slide" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </nav>    



  );
}

export default Carousel;
