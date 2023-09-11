import express from 'express'
import "express-async-errors";
import cors from 'cors'
import router from "./routes/index.js"
import errorHandler from './middlewares/errorMiddlewares.js'

const app = express();
//CONFIGURAÇÕES
app.use(cors())
app.use(express.json())

//ROTAS
app.use(router)
app.use(errorHandler);
const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`Servidor está rodando na porta ${port}`))