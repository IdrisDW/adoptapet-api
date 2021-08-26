// // const express = require('express');
// // const app = express();

// // const PORT = 4001;
// // app.listen(PORT, () => {
// //   console.log(`Server is listening on port ${PORT}`);
// // });

// // const gods = [
// //     { name: 'Zeus' }, 
// //     { name: 'Hades' }, 
// //     { name: 'Hermes' }
// //   ];
// //   app.get('/gods', (req, res, next) => {
// //     res.send(gods);
// //   });
  

// //reto 1
// //  const express = require('express');
// // const app = express();

// // const PORT = 4001;
// // app.listen(PORT, () => {
// //   console.log(`Server is listening on port ${PORT}`);
// // });
// // const conste =  
// // {
// //     Andromeda : {
// //         abreviatura : 'And',
// //         superficie :  722.3,
// //         num_estrellas : 152,
// //         estr_mas_brillante : 'Alpheratz' 
// //     },
    
// //     Sirio : {
// //         abreviatura : 'Sir',
// //         superficie :  733,
// //         num_estrellas : 29,
// //         estr_mas_brillante : 'Willka' 
// //     },

    
// //     Canopus : {
// //         abreviatura : 'Can',
// //         superficie :  722.3,
// //         num_estrellas : 152,
// //         estr_mas_brillante : 'Qolla' 
// //     }
// // };
 

// // app.get('/conste', (req, res, next) => {
// //        res.send(conste);
// // });
 
//  //ejemplo 2
//  const express = require('express');
//  const app = express();
//  const bodyParser = require('body-parser');
//  app.use(bodyParser.urlencoded({ extended: false }));
//  app.use(bodyParser.json());
 
//  const PORT = 4001;
//  app.listen(PORT, () => {
//    console.log(`Server is listening on port ${PORT}`);
//  });
 
//  const gods = { 
//      Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
//      Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
//    };
//      app.get('/gods', (req, res, ) => {
//      res.send(gods);
//    });
 
//    app.get('/gods/:name', (req, res) => {
//        var name = req.params.name;
//        var god = gods[name];
//      //   var r = [god, name];
//        if (god){
//          res.send(god);
//        }else {
//          res.status(404).send("no encontre el dios");
//        }
//      })
 
 
//  //  //reto2
 
//  //   const express = require('express');
//  // const app = express();
 
//  // const PORT = 4001;
//  // app.listen(PORT, () => {
//  //   console.log(`Server is listening on port ${PORT}`);
//  // });
//  // const conste =  
//  // {
//  //     Andromeda : {
//  //         abreviatura : 'And',
//  //         superficie :  722.3,
//  //         num_estrellas : 152,
//  //         estr_mas_brillante : 'Alpheratz' 
//  //     },
     
//  //     Sirio : {
//  //         abreviatura : 'Sir',
//  //         superficie :  733,
//  //         num_estrellas : 29,
//  //         estr_mas_brillante : 'Willka' 
//  //     },
 
     
//  //     Canopus : {
//  //         abreviatura : 'Can',
//  //         superficie :  722.3,
//  //         num_estrellas : 152,
//  //         estr_mas_brillante : 'Qolla' 
//  //     }
//  // };
  
 
//  // app.get('/conste', (req, res, next) => {
//  //        res.send(conste);
//  // });
 
 
//  // app.get('/conste/:nombre', (req, res) => {
//  //     var nombre = req.params.name;
//  //     var conste = conste[name];
//  //   //   var r = [god, name];
//  //     if (conste){
//  //         res.send(conste);
//  //     }else {
//  //       res.status(404).send("no encontre la conste");
//  //     }
//  //   })
     
 
//  // //   app.get('/conste/:abreviatura', (req, res) => {
//  // //     var abreviatura = req.params.abreviatura;
//  // //     var conste = conste[abreviatura];
//  // //   //   var r = [god, name];
//  // //     if (conste){
//  // //         res.send(conste);
//  // //     }else {
//  // //       res.status(404).send("no encontre la conste abreviatura");
//  // //     }
//  // //   })
  
 
//  //ejemplo 3
 
//  // app.put('/gods/:name' , (req,res) => {
//  //     var god = req.params.name;
//  //     gods[god] = req.body;
//  //     res.send(gods);
//  // })
 
//  app.put('/gods/:name', (req, res) => {
//      var god = req.params.name;
//          gods[god] = req.body;
//          res.send(gods);
//    })
   
 
//    app.post('/gods', (req, res) => {
//      var  name = req.query.name
//      var info =  req.body;
//      gods[name] = newGod;
//      res.status(200).send(gods);
//    })
   
 
//    app.delete('/gods/:name' , (req,res) => {
//        var name = req.params.name;
//        delete gods[name]
//        res.send(gods)
//    });