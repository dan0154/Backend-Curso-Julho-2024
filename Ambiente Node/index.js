const express = require('express') //É como o import do jsx

const app = express()

app.get("/test-api", function(req, res){ //Rota como se fosse www.site.com/test-api
    //Req = requisição, da onde vêm dados que podem ser passado
    //Res = resposta
    res.send("NOSSA API TA FUNCIONANDO")
})

app.listen(8000)