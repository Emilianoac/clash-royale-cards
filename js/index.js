var swiper = new Swiper('.slide-cartas', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el:'.paginacion-slide-cartas',
      clickable: true,
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    }
});

const cartas = document.querySelectorAll(".carta");

for (let i = 0; i < cartas.length; i++) {
    let elemento = cartas[i];
    elemento.setAttribute('id', `carta${i}`);

    let idCarta = document.getElementById(elemento.id);
    idCarta.addEventListener("dblclick",() =>{
        idCarta.classList.toggle("vuelta");
    });
}

 