 // Obtener elementos del formulario
 const form = document.getElementById('commentForm');
 const nameInput = document.getElementById('name');
 const commentInput = document.getElementById('comment');
 const responseMessage = document.getElementById('responseMessage');

 // Evento de envío del formulario
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevenir el envío normal del formulario

     const name = nameInput.value;
     const comment = commentInput.value;

     // Verificar si los campos están completos
     if (name && comment) {
         responseMessage.textContent = `Gracias por tu comentario, ${name}!`;
         responseMessage.style.color = 'green';
     } else {
         responseMessage.textContent = 'Por favor, completa todos los campos.';
         responseMessage.style.color = 'red';
     }

     // Limpiar los campos después de enviar el formulario
     nameInput.value = '';
     commentInput.value = '';
 });