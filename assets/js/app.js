document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita recargar la página

    let nombre = this.nombre.value.trim();
    let email = this.email.value.trim();
    let mensaje = this.mensaje.value.trim();
    let msgBox = document.getElementById("form-msg");

    // Validaciones
    if (nombre === "" || email === "" || mensaje === "") {
        msgBox.textContent = "⚠️ Por favor, completa todos los campos.";
        msgBox.style.color = "red";
        return;
    }

    // Enviar datos con fetch
    fetch("server/guardar_contacto.php", {
        method: "POST",
        body: new FormData(this)
    })
    .then(res => res.text())
    .then(data => {
        if (data === "ok") {
            msgBox.textContent = "✅ Tu mensaje fue enviado correctamente.";
            msgBox.style.color = "green";
            this.reset(); // limpiar formulario
        } else {
            msgBox.textContent = "❌ Error al enviar: " + data;
            msgBox.style.color = "red";
        }
    })
    .catch(err => {
        msgBox.textContent = "❌ Error de conexión.";
        msgBox.style.color = "red";
    });
});
