
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const errorMensaje = document.getElementById('errorMensaje');


    const usuarioValido = "zapatillaSanAntonio@gmail.com";
    const contraseñaValida = "contraseña123";

    if (usuario === usuarioValido && contraseña === contraseñaValida) {
        
        window.location.href = "index.html";
    } else {
        errorMensaje.textContent = "Usuario o contraseña incorrectos.";
        errorMensaje.style.display = "block";
    }
});
