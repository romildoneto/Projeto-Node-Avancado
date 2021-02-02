const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const buscaCep= require('./src/functions/buscaCep')
const buscaUsuario= require('./src/functions/buscaUsuarios')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
//mostrando onde ta a pasta view
app.set('views','./src/views')

// renderizando minha pagina principal
app.get('/',(req,res)=>{
 // chamndo os dados da miha view
    res.render('index')
})

// pegando os dados da view
app.post('/envia-cep',async(req, res)=>{
 const{cep} = req.body
const resultado  = await buscaCep(cep)

 res.render('resultado',{dado:resultado})

})

app.post('/envia-usuarios', async (req, res) => {
    const {usuarios} = req.body
    const resultado = await buscaUsuario(usuarios)
    
    res.render("resultUsuarios", {dado: resultado})
})


app.listen(3333)