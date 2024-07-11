const express = require('express')
const router = express.Router() //Objeto do express que serve para gerenciamento de rotas
const controlador = require('./controlador')

//SESSÃO DE CRUD
router.get("/", controlador.listUsers) //Cria a rota

router.post("/", controlador.createUser)//Cria a rota
router.post("/:id", controlador.updateUser) //Cria a rota
router.delete("/:id", controlador.deleteUser)//Cria a rota
router.get("/:id", controlador.getUser)//Cria a rota

module.exports = router //Exporta a rota