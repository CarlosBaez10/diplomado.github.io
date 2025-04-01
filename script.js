const destacados = [
    { url: './assets/imagen1.avif', titulo: 'Paisaje de rio' },
    { url: './assets/imagen2.avif', titulo: 'Retrato Bosque' },
    { url: './assets/imagen2.webp', titulo: 'retrato de naturaleza' },
];

const destacadosContainer = document.getElementById('destacados-container');

destacados.forEach(imagen => {
    const div = document.createElement('div');
    div.classList.add('col-md-4', 'mb-4');

    div.innerHTML = `
        <img src="${imagen.url}" class="img-fluid" alt="${imagen.titulo}">
        <h3>${imagen.titulo}</h3>
    `;

    destacadosContainer.appendChild(div);
});

const categorias = ['Naturaleza', 'Retratos', 'Urbana', 'Abstracto', 'Animales'];

const categoriasContainer = document.getElementById('categorias-container');

categorias.forEach(categoria => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary', 'mr-2', 'mb-2');
    button.textContent = categoria;
    button.addEventListener('click', () => filtrarImagenes(categoria));

    categoriasContainer.appendChild(button);
});


const formularioContacto = document.getElementById('formulario-contacto');

formularioContacto.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    formularioContacto.reset();
});



