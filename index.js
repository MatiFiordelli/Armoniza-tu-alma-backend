import express from 'express'
/* import cors from 'cors' */
import GetData from './mongoData.js'

const app = express()
/* app.use(cors({origin: ['http://localhost:3000/']})) */
const port = process.env.port
const mainProducts = await GetData()

app.get('/', (req, res)=>{
    res.send('Welcome')
}) 
app.get('/main-products', (req, res)=>{
    res.json(mainProducts)
})

app.listen(port || 3001, ()=>console.log('server online'))

