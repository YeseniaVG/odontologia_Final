const express = require('express')

const router = express.Router()

let Solicitud = []

 // router.get('/obtenerCitas', (req, response) => {
router.get('/obtenerSolicitud', (request, response) => {
  
       response.json(Solicitud)
})

//post---enviar datos
//get--obtener datos
//delete--eliminar datos
//put-- actualizar datos

router.post('/enviarSolicitudes', (req, res) =>{
 const Solicitudes = {
     btnNom : req.body.btnNom,
     btnSeg: req.body.btnSeg,
     Ape: req.body.Ape,
     Ema: req.body.Ema,
     servicios: req.body.Servicios,
     Fec: req.body.Fec,
     Hora: req.body.Hora


 };
 Solicitud.push(Solicitudes)
 console.log(Solicitud)
 res.json(Solicitudes)

})
module.exports = router;