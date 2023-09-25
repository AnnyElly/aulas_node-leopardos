const express = require ("express")

const app = express()

app.get('/', (requesicao, resposta) =>{
    resposta.send("Estou funcionando!")
})
// get; pegar informação
app.listen(3000, () => {
    console.log("Servido rodando na porta 3000")

})