const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRouter = require("./dog");
const temperamentRouter = require("./temperament");
const dogsRouter = require("./dogs")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dog", dogRouter);
router.use("/temperament", temperamentRouter);
router.use("/dogs", dogsRouter);


module.exports = router;
