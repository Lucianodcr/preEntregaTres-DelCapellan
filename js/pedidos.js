document.getElementById("envioDeFormulario").addEventListener("enviar", function (evento) {
    evento.preventDefault();

    // Obtengo los valores ingresados por el usuario
    let direccion = document.getElementById("direccion").value;
    let fecha = document.getElementById("fecha").value;
    let pago = document.getElementById("pago").value;
    let datosAdicionales = document.getElementById("datosAdicionales").value;


    let datosEnvio = {
        "direccion": direccion,
        "fecha": fecha,
        "pago": pago,
        "datosAdicionales": datosAdicionales
    };

    // convierto el objeto de JSON a cadena
    let datos = JSON.stringify(datosEnvio);

    localStorage.setItem("datos de envio", datos);

    alert("Su pedido a sido registrado!");
});