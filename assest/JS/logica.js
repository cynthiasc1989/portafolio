document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulario enviado correctamente!');
        form.reset();
    });

    document.querySelectorAll('.title').forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.transition = 'font-size 0.3s ease';
            title.style.fontSize = '2.5rem';
        });
        title.addEventListener('mouseout', () => {
            title.style.transition = 'font-size 0.3s ease';
            title.style.fontSize = '2rem';
        });
    });

    var originalAboutText = document.getElementById('about-text').textContent.trim();

    // Función para actualizar el texto de "Sobre mí"
    document.getElementById('update-about').addEventListener('click', function() {
        document.getElementById('about-text').textContent = "Nuevo contenido sobre mí.";
    });

    // Función para restaurar el texto original de "Sobre mí"
    document.getElementById('restore-about').addEventListener('click', function() {
        document.getElementById('about-text').textContent = originalAboutText;
    });

    // Función para añadir y eliminar la clase de animación
    const addClickEffect = (element) => {
        element.classList.add('click-zoom');
        element.addEventListener('animationend', () => {
            element.classList.remove('click-zoom');
        });
    };

    // Actualizar el contenido de la sección "Sobre mí" con efecto
    const updateAboutButton = document.getElementById('update-about');
    updateAboutButton.addEventListener('click', () => {
        const aboutText = document.getElementById('about-text');
        aboutText.textContent = 'Nuevo contenido sobre mí. Aquí puedes agregar información actualizada sobre ti.';
        addClickEffect(updateAboutButton);
    });
});
