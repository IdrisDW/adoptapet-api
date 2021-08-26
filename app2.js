

//  // reto 2
//  const express = require('express');
//  const app = express();
 
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
 
 
 