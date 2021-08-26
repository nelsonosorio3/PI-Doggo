const express = require("express");
const router = express.Router();
const {Breed, Temperament} = require("../db");


// dog
router.post("/", async (req, res)=>{
  //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  //Crea una raza de perro en la base de datos
  const {name, temperaments, height,weight,life_span} = req.body;
  
  const [breed, created] = await Breed.findOrCreate({
    where: {name: name},
    defaults: {height,
              weight,
              life_span}
  });

  if(temperaments && created){
    for await (let temperament of temperaments) {
      const [mood, isNew] = await Temperament.findOrCreate({
        where: {name: temperament}
      })
      await breed.addTemperament(mood)
    }
  }
  
  
  // await breed.addTemperaments(temperaments.join(""));

  if(!created) return res.json("noCreated");

  return res.json(breed.id)

});

module.exports = router;