import express from 'express'
import cors from 'cors'
import GetData from './mongoData.js'

const app = express()
app.use(cors())
const port = process.env.port
const mainProducts = await GetData()

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
  });

app.get('/', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.send('Welcome')
}) 

app.get('/main-products', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.json(mainProducts)
})

app.listen(port || 3001, ()=>console.log('server online'))

