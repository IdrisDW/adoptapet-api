// const express = require('express');
// const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const PORT = 4001;
// app.listen(PORT, () => {
// 	console.log('ITS ALIVE!!! Server listening on port ${PORT}')
// })

// const gods = {
//   Zeus: { live: 'Olympus', symbol: 'Thunderbolt' },
//   Hades : { live : 'Underworld', symbol: 'Cornucopia' }
// };

// app.get('/gods', (req, res)=>{
// 	res.send(gods);
// })

// app.get('/gods/:name', (req, res) =>{
// 	var name = req.params.name;
// 	var god = gods[name]
// 	if (god){
// 		res.send(god)
// 	} else {
// 		res.status(418).send("No encontre el dios")
// 	}
// })

// app.put('/gods/:name', (req, res)=>{
// 	var god = req.params.name;
// 	gods[god] = req.body
// 	res.send(gods)
// })

// app.post('/gods', (req,res)=>{
// 	var name = req.query.name;
// 	var info = req.body;
// 	gods[name] = info;
// 	res.status(200).send(gods)
// })

// app.delete('/gods/:name', (req,res)=>{
// 	var name = req.params.name;
// 	delete gods[name]
// 	res.send(gods)
// })

// CONSTELACIONES

const express = require("express");
const app = express();
 

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4001;
app.listen(PORT, () => {
  console.log("ITS ALIVE!!! Server listening on port ${PORT}");
});

const gods = {
  Zeus: { live: "Olympus", symbol: "Thunderbolt" },
  Hades: { live: "Underworld", symbol: "Cornucopia" },
};

const constelaciones = {
  Andromeda: {
    abreviatura: "And",
    superficie: 722.3,
    num_estrellas: 152,
    estr_mas_brillante: "Alpheratz",
  },

  Sirio: {
    abreviatura: "Sir",
    superficie: 733,
    num_estrellas: 29,
    estr_mas_brillante: "Willka",
  },

  Canopus: {
    abreviatura: "Can",
    superficie: 722.3,
    num_estrellas: 152,
    estr_mas_brillante: "Qolla",
  },
};

app.get("/constelaciones", (req, res) => {
  res.send(constelaciones);
});
 // var search = req.params.search;
  
app.get("/constelaciones/:name", (req, res) => {
  var name = req.params.name;
  var constelacion = constelaciones[name];
  if (constelacion) {
    res.send(constelacion);
  } else {
    res.status(418).send("No encontre el nombre");
  }
});

app.get("/constelaciones/:search/:s", (req, res) => {
  
  for (const item in constelaciones) {
    if (constelaciones[item]["search"] === req.params.sv) {
      res.send(constelaciones[item]);
    } else {
      res.status(418).send("No encontre el nombre(abv)");
    }
  }
});

app.put("/constelaciones/:name", (req, res) => {
  var constelacion = req.params.name;
  constelaciones[constelacion] = req.body;
  res.send(constelaciones);
});

app.post("/constelaciones", (req, res) => {
  var name = req.query.name;
  var info = req.body;
  constelaciones[name] = info;
  res.status(200).send(constelaciones);
});

app.delete("/constelaciones/:name", (req, res) => {
  var name = req.params.name;
  delete constelaciones[name];
  res.send(constelaciones);
});
