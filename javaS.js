// Inicializa EmailJS
emailjs.init("DCri6gS6FExqfQ5II"); // <-- Reemplaza esto

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const estadoEnvio = document.getElementById("estado-envio");
    estadoEnvio.textContent = "Enviando...";

    emailjs.sendForm("moranyeison522@gmail.com", "template_zn0exhb", this).then(
      function () {
        estadoEnvio.textContent = "¡Mensaje enviado exitosamente!";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        estadoEnvio.textContent = "Error al enviar. Intenta de nuevo.";
        console.error("Error:", error);
      }
    );
  });
