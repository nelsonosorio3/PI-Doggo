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
            apiBreeds.push({name: element.name, 
                            temperaments: element?.temperament?.toLocaleLowerCase(), 
                            img: element.image.url, 
                            id: element.id,
                            weight: element.weight.metric})
          }
        });
    for await (let element of dbBreeds) {
      let arrayTemperaments = [];
      for await (let mood of element?.dataValues?.temperaments){
        arrayTemperaments.push(mood.dataValues.name)
      }
      apiBreeds.push({name: element.dataValues.name, 
                      temperaments: arrayTemperaments.join(", ").toLocaleLowerCase(), 
                      img: element.dataValues.img, 
                      id: element.dataValues.id,
                      weight: element.dataValues.weight})
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
            arraySearch.push({name: element.name, 
                              temperaments: element?.temperament?.toLocaleLowerCase(), 
                              img: element.image.url, 
                              id: element.id,
                              weight: element.weight.metric})
          }
        }
      });
   
    const dbHasWord = await Breed.findAll(
      {include: Temperament,
      where: {
        name: {
          [Op.substring]: name.toLocaleLowerCase()
        }
      }
    }
    );
    for await (let element of dbHasWord) {
      let arrayTemperaments = [];
      for await (let mood of element?.dataValues?.temperaments){
        arrayTemperaments.push(mood.dataValues.name)
      }

      arraySearch.push({name: element.dataValues.name, 
                        temperaments: arrayTemperaments.join(", ").toLocaleLowerCase(), 
                        img: element.dataValues.img, 
                        id: element.dataValues.id,
                        weight: element.dataValues.weight})
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
  let arrayTemperaments = [];
  if(dbHasId){
    for await(let mood of dbHasId.temperaments){
      arrayTemperaments.push(mood.name)
    }
  }
  
  if (dbHasId) return res.json({id: dbHasId.id, 
                                name: dbHasId.name, 
                                height: dbHasId.height, 
                                weight: dbHasId.weight, 
                                life_span: dbHasId.life_span, 
                                img: dbHasId.img, 
                                temperaments: arrayTemperaments.join(" ,".toLocaleLowerCase())});

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
                                temperaments: apiHasId.temperament});

  res.sendStatus(404);
});

module.exports = router;