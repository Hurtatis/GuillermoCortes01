function mostrarModal() {
    document.getElementById('miModal').style.display = 'block';
}

function mostrarModal2() {
    document.getElementById('miModal2').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

function cerrarModal2() {
    document.getElementById('miModal2').style.display = 'none';
}

// Cierra la ventana modal haciendo clic fuera de ella
window.onclick = function(event) {
    var modal = document.getElementById('miModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
