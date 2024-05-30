"use strict"

const db = firebase.firestore();


const collectionStr = "contacto";

const form = document.querySelector("#frm");





const onInsert = objeto => db.collection(collectionStr).doc().set(objeto);

const onUpdate = (paramId, ObjNew) => db.collection(collectionStr).doc(paramId).update(ObjNew);



form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    // crear el objeto

    let contacto = {
        nombre : form.txtNombre.value,
        telefono : form.txtTelefono.value,
        correo : form.txtCorreo.value,
        asunto : form.txtAsunto.value,
        mensaje : form.txtMensaje.value,

    };


 

        // Insertar el objeto en Firebase
        await onInsert(contacto);

      

});


document.getElementById('descargarBtn').addEventListener('click', function(event) {
    
    event.preventDefault();

    // Descargar el archivo PDF
    window.location.href = this.querySelector('a').getAttribute('href');

    // Detener la propagación del evento para evitar que se dispare en otras partes de la página
    event.stopPropagation();
});




