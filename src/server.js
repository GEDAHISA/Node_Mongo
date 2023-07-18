import express from 'express'
import mongoose from "mongoose"
import 'dotenv/config'
import { Usuario } from './models/Usuario.js'

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())


const host = 'localhost'
const port = 5000

//endpoint inicial
app.get('/', (req, res) => {
  res.send({msg: 'Servidor rodando!',codigo: 200} )
});


//endpoints do Usuario
//desentruturação do body para acessar tributos
app.post('/usuario', async (req, res)=> {
  const {nome,idade,ativo,email} = req.body;
  //crio o objeto usuario copiado do objeto body
  const usuario = {nome,idade,ativo,email}
   //cria o usuario atraves do moongose
  await Usuario.create(usuario)
  res.status(201).json('Usuario criado com sucesso')
})

app.put('/usuario/:id', async(req, res) => {
const id = req.params.id

const {nome, idade, ativo, email} = req.body;

const usuario = {nome, idade, ativo, email};

await Usuario.updateOne ({ _id: id}, usuario)
res.status(200).json('usuario atualizado com sucesso!')


})


app.get('/Usuario',async (req, res)=>{
  const usuarios = await Usuario.find()
  res.status(200).json(usuarios)

})
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS


const DB_USER_COMPASS = process.env.DB_USER
const DB_PASS_COMPASS = process.env.DB_PASS

console.log(DB_USER_COMPASS, DB_PASS_COMPASS)

//conectando no banco mongo atlas//
mongoose.connect(
  // mongo atlas//
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.4ayqfm8.mongodb.net/dc_fs12?retryWrites=true&w=majority`//
  //`mongodb+srv://gedahisa:guxtnZbVsmRq5qDG@cluster0.4ayqfm8.mongodb.net/usuario?retryWrites=true&w=majority`
  // `mongodb+srv://${DB_USER_COMPASS}:${DB_PASS_COMPASS}@cluster0.4ayqfm8.mongodb.net/usuario?retryWrites=true&w=majority`
   )
  .then(() => {
    console.log( 'BD conectado com sucesso');
  })
  .catch(error => {
    console.log('erro ao conectar no BD', error)
   })

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`)
})