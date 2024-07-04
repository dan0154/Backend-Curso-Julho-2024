const express = require('express') //É como o import do jsx
require("dotenv").config() //Para usar os recursos do dotenv
const connectDB = require('./db')

const app = express()

connectDB() //A chamada precisa ficar aqui

app.get("/test-api", function(req, res){ //Rota como se fosse www.site.com/test-api, conectada a uma função
    //Req = requisição, da onde vêm dados que podem ser passado
    //Res = resposta
    res.send("NOSSA API TA FUNCIONANDO")
})

app.listen(8001)