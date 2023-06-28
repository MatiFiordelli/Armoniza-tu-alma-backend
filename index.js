import express from 'express'
import cors from 'cors'
import GetData from './mongoData.js'

const app = express()
app.use(cors({origin: '*'}))
const port = process.env.port
const mainProducts = await GetData()

app.get('/', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.send('Welcome')
}) 

app.get('/main-products', cors({origin:false}), (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.json(mainProducts)
})

/* app.get('/main-products', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.json(mainProducts)
}) */

app.listen(port || 3000, ()=>console.log('server online'))

