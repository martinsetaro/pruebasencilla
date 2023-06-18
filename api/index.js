import express from 'express';
import cors from 'cors';
import datos from '../routes/datos.routes.js'
import destinos from '../routes/destinos.routes.js'



const app = express();

const Port = process.env.PORT || 4001;


app.use(express.json());
app.use(cors());
app.use(express.static('public'));


// Routes

app.use(datos)
app.use(destinos)



app.listen(Port,()=>{
    console.log(`El servidor está usando el puerto ${Port}`)
})