

import app from "./src/app.js"
import { Usuario } from "./src/models/Usuario.js"
import moment from "moment/moment.js"


const host = 'localhost'
const port = 5000

//endpoint inicial
app.get('/', (req, res) => {
  res.send({ msg: 'Servidor rodando!', codigo: 200 })
});




app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`)
})