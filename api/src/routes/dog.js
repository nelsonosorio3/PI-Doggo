const express = require("express");
const router = express.Router();
const {Breed} = require("../db");


// dog
router.post("/", async (req, res)=>{
  //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  //Crea una raza de perro en la base de datos
  const {name, minHeight, maxHeight, minWeight, maxWeight, minLife_span, maxLife_span, temperaments} = req.body;
  const [breed, created] = await Breed.findOrCreate({
    where: {name: name},
    defaults: {height: `${minHeight} - ${maxHeight}`,
              weight: `${minWeight} - ${maxWeight}`,
              life_span: `${minLife_span} - ${maxLife_span}`}
  });

  await breed.addTemperaments(temperaments);

  if(!created) return res.send("That breead already exists in the database");

  res.send("Breed successfully created!")

});

module.exports = router;