 
 
 //ejemplo 2
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const gods = { 
    Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
    Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
  };
    app.get('/gods', (req, res, ) => {
    res.send(gods);
  });

  app.get('/gods/:name', (req, res) => {
      var name = req.params.name;
      var god = gods[name];
    //   var r = [god, name];
      if (god){
        res.send(god);
      }else {
        res.status(404).send("no encontre el dios");
      }
    })
 

app.put('/gods/:name', (req, res) => {
    var god = req.params.name;
        gods[god] = req.body;
        res.send(gods);
  })
  

  app.post('/gods', (req, res) => {
    var  name = req.query.name
    var info =  req.body;
    gods[name] = info;
    res.status(200).send(gods);
  })
  

  app.delete('/gods/:name' , (req,res) => {
      var name = req.params.name;
      delete gods[name]
      res.send(gods)
  });