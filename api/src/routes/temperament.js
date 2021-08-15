const express = require("express");
const router = express.Router();
const { Temperament } = require('../db')

// temperament
router.get("/", async (req, res)=>{
  //Obtener todos los temperamentos posibles
  // En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
  const temperaments = await Temperament.findAll();
  res.json(temperaments);
});

module.exports = router;