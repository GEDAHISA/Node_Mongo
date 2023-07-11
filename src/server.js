import express from 'express'
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()
const host = 'localhost'
const port = 5000

//endpoint inicial
app.get('/', (req, res) => {
  res.send('Servidor rodando!')
});

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

console.log(DB_USER, DB_PASS)

//conectando no banco mongo atlas//
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.4ayqfm8.mongodb.net/usuario?retryWrites=true&w=majority`
  //`mongodb+srv://gedahisa:guxtnZbVsmRq5qDG@cluster0.4ayqfm8.mongodb.net/usuario?retryWrites=true&w=majority`
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