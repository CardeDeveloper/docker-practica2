const router = require('express').Router();

//importar las rutas
const homeRoute = require('./home');
const operationsRoute = require('./operations');

//se hacen los paths con la ruta
router.use('/autors', homeRoute);
router.use('/operations', operationsRoute);

//se instancia el path con retorno directo
router.use('/', (req, res) => {
    res.json(
        {
            version: "0.0.1",
            paths: [
                "/autors",
                "/operations"
            ]           
        }
    )
})

module.exports = router;