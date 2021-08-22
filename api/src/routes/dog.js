const express = require("express");
const router = express.Router();
const {Breed, Temperament} = require("../db");


// dog
router.post("/", async (req, res)=>{
  //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  //Crea una raza de perro en la base de datos
  const {name, minHeight, maxHeight, minWeight, maxWeight, minLife_span, maxLife_span, temperaments, height,weight,life_span} = req.body;
  
  const [breed, created] = await Breed.findOrCreate({
    where: {name: name},
    defaults: {height,
              weight,
              life_span}
  });

  if(temperaments){
    for await (let temperament of temperaments) {
      const [mood, isNew] = await Temperament.findOrCreate({
        where: {name: temperament}
      })
      await breed.addTemperament(mood)
    }
  }
  
  
  // await breed.addTemperaments(temperaments.join(""));

  if(!created) return res.send("That breead already exists in the database");

  res.send("Breed successfully created!")

});

module.exports = router;