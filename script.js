document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    
    // Validación simple (puedes cambiar la lógica para validarlo con un servidor)
    if (username === "usuario" && password === "contraseña") {
        message.style.color = "green";
        message.textContent = "Inicio de sesión exitoso";
    } else {
        message.style.color = "red";
        message.textContent = "Usuario o contraseña incorrectos";
    }
});
