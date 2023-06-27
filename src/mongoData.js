import  { MongoClient } from 'mongodb'

export default async function GetData(){
     const url = "mongodb+srv://matifiordelli:mat123@cluster0.2bgyfbp.mongodb.net/?retryWrites=true&w=majority"

     let mongoClient
     try {
          mongoClient = new MongoClient(url)
          console.log('Connecting to MongoDB..')
          await mongoClient.connect()
          console.log('Successfully connected')
          const db = mongoClient.db('ArmonizaTuAlma')
          const collection = db.collection('MainProducts')
          const info = collection.find({}).toArray()
          return await info
     
     } catch (error) {
          console.error('Connection to MongoDB was failed!', error)
          process.exit()
     } finally {
          await mongoClient.close()
     }
}