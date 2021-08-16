//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//          ▄              ▄    
//         ▌▒█           ▄▀▒▌   
//         ▌▒▒█        ▄▀▒▒▒▐   
//        ▐▄█▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐   
//      ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐   
//    ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌   
//   ▐▒▒▒▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▌  
//   ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐  
//  ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌ 
//  ▌░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌ 
// ▌▒▒▒▄██▄▒▒▒▒▒▒▒▒░░░░░░░░▒▒▒▐ 
// ▐▒▒▐▄█▄█▌▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
// ▐▒▒▐▀▐▀▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▐ 
//  ▌▒▒▀▄▄▄▄▄▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▒▌ 
//  ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▒▄▒▒▐  
//   ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▄▒▒▒▒▌  
//     ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀   
//       ▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀     
//          ▀▀▀▀▀▀▀▀▀▀▀▀        
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Dog, Breed, Temperament } = require('./src/db.js')
const fetch = require("node-fetch")
const {API_KEY} = process.env;

var moods = new Set();

// const request = async () => {
//   const response = await fetch('https://api.thedogapi.com/v1/breeds?api_key=62e28b20-61b8-43b1-bf6c-e8a58fe854d1');
//   const data = await response.json();
//   for (let i = 0; i < data.length; i++) {
//     let temp = data[i].temperament?.split(",");
//     for (let j = 0; j < temp?.length; j++) {
//       moods.add(temp[j].trim())
//     } 
//   }
//   console.log(moods)
// }
// request();
// console.log(moods)
// var test = request();
// console.log(test)

// fetch('https://api.thedogapi.com/v1/breeds?api_key=62e28b20-61b8-43b1-bf6c-e8a58fe854d1')
// .then(response => response.json())
// .then(data => {
//   for (let i = 0; i < data.length; i++) {
//     let temp = data[i].temperament?.split(",");
//     for (let j = 0; j < temp?.length; j++) {
//       moods.add(temp[j].trim())
//     } 
//   }
// });


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    // Preload
    // fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 
    //   .then(response => response.json())
    //   .then(data => {
    //     for (let i = 0; i < data.length; i++) {
    //       let temp = data[i].temperament?.split(",");
    //       for (let j = 0; j < temp?.length; j++) {
    //         moods.add(temp[j].trim())
    //       } 
    //     }
    //     moods.forEach((mood)=>{
    //       Temperament.create({
    //         name: mood
    //       })
    //     })
    //   });
    Breed.create({
      name: "test",
      height: "12 - 18",
      weight: "20 - 30",
      life_span: "10 - 15",
    })
    Breed.create({
      name: "test2",
      height: "17 - 24",
      weight: "25 - 30",
      life_span: "5 - 15",
    })
  });
});
