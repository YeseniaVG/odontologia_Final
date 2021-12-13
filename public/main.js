
document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOM cargado')
    let btnGuardar = document.querySelector('#btnGuardar')



    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("./sw.js")
     //   .then(() => navigator.serviceWorker.ready)
       // .then(registration =>  {
         //if ('SyncManager' in window) {
           //  registration.sync.register(sync-Solicitudes)
        // }
        //})
      }



   btnGuardar.addEventListener("click", () => {
    guardar();
        
    })
    

    



function guardar(params) {
    const transaction = database.transaction(["Solicitudes"], "readwrite")
    const objStore = transaction.objectStore("Solicitudes")

    let btnNom = document.querySelector('#btnNom');
    let btnSeg = document.querySelector('#btnSeg');
    let Ape =document.querySelector('#Ape');
    let Em =document.querySelector('#Em');
    let Servicios =document.querySelector('#Servicios');
    let Fec =document.querySelector('#Fec');
    let Hora =document.querySelector('#Hora');


    

    let Solicitudes = {
   btnNom: btnNom.value,
   btnSeg: btnSeg.value,
   Ape: Ape.value,
   Ema: Em.value,
   Servicios: Servicios.value,
   Fec: Fec.value,
   Hora: Hora.value


    }
    console.log(Solicitudes);


    //se creó lo siguiente 9/11
 

  // objStore.add(paciente) //método que permite almacenar datos, en este ejemplo a 'paciente'
let result = objStore.add(Solicitudes); 


let SolicitudesObjeto = JSON.stringify(Solicitudes)
    fetch("/api/enviarSolicitudes", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: SolicitudesObjeto,
    }).catch(err => {
        
    })

    

  


result.onsuccess = event => {
    console.log('Cita agendada')
    alert("Cita guardada")
}

result.onerror= event => {
    console.log('Error al guardar')
}

}


let connection = indexedDB.open("CITAS_PET", 1);

let database;


connection.onsuccess = event => {
    console.log('Conexión abierta')
    database = connection.result;
}
connection.onerror = event => {
    console.log('Error al conectar')
}
connection.onblocked = event => {
    console.log('Conexión bloqueada')
}
connection.onupgradeneeded = event => {
    database = connection.result;

    database.createObjectStore("Solicitudes", { keyPath : 'id', autoIncrement : true });
    console.log('BD actualizada')
}



window.addEventListener('online', () =>{
    console.log('En linea')
    alert("Estamos en linea")
})

window.addEventListener('offline', () => {
    console.log('Sin conexión')
    alert("Conexion fallida");
    
    
 

})

})