//conectando no banco mongo atlas//

import mongoose from "mongoose";
import 'dotenv/config'

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS


const DB_USER_COMPASS = process.env.DB_USER
const DB_PASS_COMPASS = process.env.DB_PASS

console.log(DB_USER_COMPASS, DB_PASS_COMPASS)
export const dbConnect = mongoose


//conectando no banco mongo atlas//
mongoose.connect(
    // mongo atlas//
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.4ayqfm8.mongodb.net/dc_fs12?retryWrites=true&w=majority`//
    //`mongodb+srv://gedahisa:guxtnZbVsmRq5qDG@cluster0.4ayqfm8.mongodb.net/usuario?retryWrites=true&w=majority`
    // `mongodb+srv://${DB_USER_COMPASS}:${DB_PASS_COMPASS}@cluster0.4ayqfm8.mongodb.net/usuario?retryWrites=true&w=majority`
)
    .then(() => {
        console.log('BD conectado com sucesso');
    })
    .catch(error => {
        console.log('erro ao conectar no BD', error)
    })