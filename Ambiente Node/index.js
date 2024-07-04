const express = require('express') //É como o import do jsx
const { Client } = require('pg')
require("dotenv").config() //Para usar os recursos do dotenv

//host@user.password.port.database - informações para se conectar num bd
const client = new Client({
    host: process.env.host,
    port:process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}) //Dados retirados do pgAdmin na tabela postgres do computador utilizado na hora

const app = express()

const connectDB = async () => {
    client
    .connect()
    .then(() => { //Then é executado caso a conexão ocorra sem erros
        console.log("Conexão sucedida")
    })
    .catch((err) => { //Catch é executado caso a conexão ocorra com erros
        console.error("Erro ao conectar")
    })
}
connectDB()

app.get("/test-api", function(req, res){ //Rota como se fosse www.site.com/test-api, conectada a uma função
    //Req = requisição, da onde vêm dados que podem ser passado
    //Res = resposta
    res.send("NOSSA API TA FUNCIONANDO")
})

app.listen(8001)