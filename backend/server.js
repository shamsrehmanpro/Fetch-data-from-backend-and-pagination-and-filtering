import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import DisplayRouter from './routes/dataRoutes.js';

const app = express()
const port = 4000;


//middlewares
 app.use(cors())
 app.use(bodyParser.json())

 //routes
 app.use('/api/data', DisplayRouter)

 app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
 })