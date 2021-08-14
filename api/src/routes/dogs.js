const express = require("express");
const router = express.Router();

// dogs
router.get("/", (req, res)=>{
  // Obtener un listado de las razas de perro
  // Debe devolver solo los datos necesarios para la ruta principal
});

router.get("/", (req, res)=>{
  // Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
  // Si no existe ninguna raza de perro mostrar un mensaje adecuado
});

router.get("/:id", (req, res)=>{
  // Obtener el detalle de una raza de perro en particular
  // Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  // Incluir los temperamentos asociados
});

module.exports = router;