function alternaRespAcordeon(header) {
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.acordeon-contenido');
    const allArrows = document.querySelectorAll('.arrow');

    // Colapsar otras secciones y restaurar flechas
    allContents.forEach((item, index) => {
      if (item !== content) {
        item.classList.remove('mostrar');
        allArrows[index].classList.remove('rotate');
      }
    });

    // Alternar la sección actual
    content.classList.toggle('mostrar');
    header.querySelector('.arrow').classList.toggle('rotate');
  }