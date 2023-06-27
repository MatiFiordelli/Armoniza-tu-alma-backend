import express from 'express'
import GetData from './mongoData.js'

const app = express()
const port = process.env.port
const mainProducts = await GetData()

app.get('/', (req, res)=>{
    res.send('Welcome')
}) 
app.get('/main-products', (req, res)=>{
    res.json(mainProducts)
})

app.listen(port || 3001, ()=>console.log('server online'))

