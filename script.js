function guardarNombre() {
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    if (nombreUsuario.trim() !== '') {
        document.cookie = `username=${nombreUsuario}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
        mostrarSaludo(nombreUsuario);
    } else {
        alert('Por favor, ingrese su nombre.');
    }
}

function mostrarSaludo(nombreUsuario) {
    var saludo = document.getElementById('saludo');
    saludo.innerHTML = `Bienvenido${nombreUsuario ? ', ' + nombreUsuario : ''}!`;
}

function cambiarNombre() {
    var nuevoNombreUsuario = prompt('Ingrese su nuevo nombre:');
    if (nuevoNombreUsuario !== null && nuevoNombreUsuario.trim() !== '') {
        document.cookie = `username=${nuevoNombreUsuario}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
        mostrarSaludo(nuevoNombreUsuario);
    }
}

function borrarCookie() {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    var saludo = document.getElementById('saludo');
    saludo.innerHTML = '';
}

document.addEventListener("DOMContentLoaded", function() {
    var nombreUsuarioAlmacenado = obtenerCookie('username');
    if (nombreUsuarioAlmacenado) {
        mostrarSaludo(nombreUsuarioAlmacenado);
    }
});

function obtenerCookie(nombre) {
    var cookies = document.cookie.split(';');
    for (var cookie of cookies) {
        var [nombreCookie, valorCookie] = cookie.trim().split('=');
        if (nombreCookie === nombre) {
            return valorCookie;
        }
    }
    return null;
}
