// // importamos las dependencias necesarias
// var router = require('express').Router();

// // definimos el comportamiento en la raíz del endpoint
// router.get('/', (req, res)=>{
//   res.send('welcome to adoptapet api');
// });

// router.use('/usuarios', require('./usuarios')); 
// router.use('/mascotas', require('./mascotas')); 

// // exportamos nuestro nuevo router
// module.exports = router;

var router = require('express').Router();

router.get('/', (req, res) => {
	res.send('welcome to my api');
})

router.use('/usuarios', require('./usuarios'));
router.use('/mascotas', require('./mascotas'));
router.use('/solicitudes', require('./solicitudes'));

module.exports = router;
