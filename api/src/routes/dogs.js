const express = require("express");
const router = express.Router();
const {API_KEY} = process.env;
const fetch = require("node-fetch")
const { Breed, Temperament} = require("../db");
const {Op} = require("sequelize");

// dogs
router.get("/", async (req, res)=>{
  // Obtener un listado de las razas de perro
  // Debe devolver solo los datos necesarios para la ruta principal
  const {name} = req.query;
  if(!name){
    const apiBreeds = []
    const dbBreeds = await Breed.findAll({include: Temperament});
    await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 
        .then(async response => await response.json())
        .then(async data => {
          for await (let element of data) {
            apiBreeds.push({name: element.name, temperaments: element.temperament, img: element.image.url})
          }
        });
    for await (let element of dbBreeds) {
      apiBreeds.push({name: element.dataValues.name, temperament: element.dataValues.temperament, img: element.dataValues.img})
    }
    res.json(apiBreeds);
  }
  else{
    // Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
    // Si no existe ninguna raza de perro mostrar un mensaje adecuado
    const arraySearch = [];
    await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 
      .then(async response => await response.json())
      .then(async data => {
        for await (let element of data) {
          if(element.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
            arraySearch.push({name: element.name, temperaments: element.temperament, img: element.image.url})
          }
        }
      });
   
    const dbHasWord = await Breed.findAll(
      {
      where: {
        name: {
          [Op.substring]: name
        }
      }
    }
    );
    for await (let element of dbHasWord) {
      arraySearch.push({name: element.dataValues.name, temperament: element.dataValues.temperament, img: element.dataValues.img})
    };
  
    res.json(arraySearch)  
  }
  
});

// router.get("/", async (req, res)=>{
//   // Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
//   // Si no existe ninguna raza de perro mostrar un mensaje adecuado
//   const {name} = req.query;
//   if(!name) return res.sendStatus(404);
//   console.log(name)
//   const arraySearch = [];
//   await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 
//     .then(async response => await response.json())
//     .then(async data => {
//       for await (let element of data) {
//         if(element.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
//           arraySearch.push(element.name)
//         }
//       }
//     });
 
//   const dbHasWord = await Breed.findAll(
//     {
//     where: {
//       name: {
//         [Op.substring]: name
//       }
//     }
//   }
//   );
//   for await (let element of dbHasWord) {
//     arraySearch.push(element.dataValues.name)
//   };

//   res.json(arraySearch)
// });





router.get("/:id", async (req, res)=>{
  // Obtener el detalle de una raza de perro en particular
  // Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  // Incluir los temperamentos asociados
  const {id} = req.params;
  const dbHasId = await Breed.findByPk(Number(id), {include: Temperament});
  if (dbHasId) return res.json({id: dbHasId.id, 
                                name: dbHasId.name, 
                                height: dbHasId.height, 
                                weight: dbHasId.weight, 
                                life_span: dbHasId.life_span, 
                                img: dbHasId.img, 
                                temperaments: dbHasId.temperaments});

  const apiHasId = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 
    .then(async response => await response.json())
    .then(async data => {
      for await (let element of data) {
        if(element.id === Number(id)){
          return element;
        }
      }
    });
  if (apiHasId) return res.json({id: apiHasId.id, 
                                name: apiHasId.name, 
                                height: apiHasId.height.metric, 
                                weight: apiHasId.weight.metric, 
                                life_span: apiHasId.life_span, 
                                img: apiHasId.image.url, 
                                temperament: apiHasId.temperaments});

  res.sendStatus(404);
});

module.exports = router;