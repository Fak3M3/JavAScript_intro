document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se recargue
    
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText === '') return; // Si el comentario está vacío, no hacer nada

    const commentDate = new Date();
    const commentDateStr = commentDate.toLocaleString(); // Fecha y hora en formato legible

    // Crear el div del comentario
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    // Crear el contenido del comentario
    commentDiv.innerHTML = `
        <p>${commentText}</p>
        <div class="comment-time">${commentDateStr}</div>
        <div class="comment-actions">
            <button class="btn btn-danger btn-sm" onclick="deleteComment(this)">Eliminar</button>
        </div>
    `;

    // Agregar el comentario a la sección de comentarios
    document.getElementById('commentsSection').appendChild(commentDiv);

    // Limpiar el campo de texto
    commentInput.value = '';
});

// Función para eliminar un comentario
function deleteComment(button) {
    const commentDiv = button.closest('.comment');
    commentDiv.remove();
}
