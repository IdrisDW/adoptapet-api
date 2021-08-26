// const express = require('express');
// const app = express();

// const PORT = 4001;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// const gods = [
//     { name: 'Zeus' }, 
//     { name: 'Hades' }, 
//     { name: 'Hermes' }
//   ];
//   app.get('/gods', (req, res, next) => {
//     res.send(gods);
//   });
  
//  const express = require('express');
// const app = express();

// const PORT = 4001;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
// const conste =  
// {
//     Andromeda : {
//         abreviatura : 'And',
//         superficie :  722.3,
//         num_estrellas : 152,
//         estr_mas_brillante : 'Alpheratz' 
//     },
    
//     Sirio : {
//         abreviatura : 'Sir',
//         superficie :  733,
//         num_estrellas : 29,
//         estr_mas_brillante : 'Willka' 
//     },

    
//     Canopus : {
//         abreviatura : 'Can',
//         superficie :  722.3,
//         num_estrellas : 152,
//         estr_mas_brillante : 'Qolla' 
//     }
// };
 

// app.get('/conste', (req, res, next) => {
//        res.send(conste);
// });
 
  
const express = require('express');
const app = express();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const gods = { 
    Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
    Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
  };
  
  app.get('/gods/:name', (req, res, next) => {
    res.send(gods[req.params.name]);
  });
  