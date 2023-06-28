import express from 'express'
import cors from 'cors'
import GetData from './mongoData.js'

const app = express()
app.use(()=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
const port = process.env.port
const mainProducts = await GetData()

app.get('/', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.send('Welcome')
}) 

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
      }
      else {
      //move on
        next();
      }
})

app.get('/main-products', cors({origin:'*'}), (req, res)=>{
    res.json(mainProducts)
})

/* app.get('/main-products', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.json(mainProducts)
}) */

app.listen(port || 3000, ()=>console.log('server online'))

