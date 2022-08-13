const formEcuacion = document.getElementById("formEcuacion")
const respuestaX = document.getElementById("respuestaX")
formEcuacion.addEventListener("submit", (e) =>{
    e.preventDefault()
    let respuestaEcuacion = parseFloat(respuestaX.value);
    (respuestaEcuacion == 1) ? Swal.fire({ //Operador avanzado + Librerías SweetAlert2 y Toastify
        icon: 'success',
        title: '¡Correcto!',
        text: 'La respuesta correcta es "1"',
    }) : Toastify({
        text: "Respuesta equivocada",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(244,18,18,1) 100%)",
        },
        onClick: function(){}
    }).showToast();
    formEcuacion.reset()
})