document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('user').value;
    
    
    this.innerHTML = `
        <div style="text-align: center; color: #50fa7b; padding: 20px;">
            <h3>SISTEMA: Datos Procesados</h3>
            <p>Bienvenido a la red, ${usuario}. Tu stack ha sido registrado.</p>
        </div>
    `;
    
    console.log("¡Formulario enviado con éxito!");
});