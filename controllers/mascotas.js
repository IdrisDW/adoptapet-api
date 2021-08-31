// const Mascota= require('../models/Mascota')

// //CRUD

// function crearMascota(req,res){
//     var mascota=new Mascota(req.body)
//     res.status(200).send(mascota)
// }

// function obtenerMascota(req,res){
//     var mascota1 = new Mascota(4, 'Tommy', 'perro', 'url', 'Cabeza', 'Karina','Mexico');
//     var mascota2 = new Mascota(5, 'Poncho', 'gato', 'url', 'con','Romina','NYC');
//     res.status(200).send(mascota1,mascota2)
// }
//  function modificarMascota(req,res){
//     var mascota=new Mascota(req.params.id, 'Tommy', 'perro', 'url', 'Cabeza de venado', 'Karina','Mexico')
//     var edit=req.body
//     mascota={...mascota,...edit}
//     res.send(mascota)
// }
//  function eliminarMascota(req,res){
//     res.status(200).send(`La mascota ${req.params.id} se eliminó`)
// }
//  module.exports={
//     crearMascota,
//     obtenerMascota,
//     modificarMascota,
//     eliminarMascota
// }







const Mascota = require('../models/Mascota')

//CRUD

function crearMascota(req,res){
    var mascota = new Mascota (req.body);
    res.status(200).send(mascota);

}

function obtenerMascota(req,res){
    var mascotapepe = new Mascota(1, 'pepe' , 'perro', 'url', 'perro', 'descripcion' , 'anunciante', 'mexico');
    var mascotalala = new Mascota(2, 'lala', 'gato', 'urlfoto', 'gato' , 'gato en adopcion', 'anunciante', 'mexico');
    res.send([mascotapepe,mascotalala]);
}

function modificarMascota(req,res){
var mascota = new Mascota(req.params.id, 'pepe', 'perro', 'url', 'perro', 'descripcion' , 'anunciante', 'mexico' )
var modificaciones = req.body 
mascota = { ...mascota, ...modificaciones}
res.send(mascota)

}

function eliminarMascota(req,res){
    res.status(200).send(`la mascota${req.params.id} se elimino`)

} 

module.exports ={
    crearMascota,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
  }
  