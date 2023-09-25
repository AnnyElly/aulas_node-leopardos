const express = require ("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, 'template')

app.get('/', (requesicao, resposta) =>{
    resposta.sendFile(`${caminhoBase}/index.html`)
})
// get; pegar informação
app.listen(3000, () => {
    console.log("Servido rodando na porta 3000")

})