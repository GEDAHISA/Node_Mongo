
import morgan from 'morgan';
import express from 'express';



const app = express()


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(morgan("combined"))

export default app;
