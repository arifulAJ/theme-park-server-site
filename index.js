const express=require('express');
const { runMain } = require('module');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const cors = require('cors')
const app=express();
app.use(cors())
const port=5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lreh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
         const database=client.db('fantasyKingdom');
         const serviceCollection=database.collection('services');
       //  get api
  
       app.get('/products',async(req,res)=>{
           const cursor=serviceCollection.find({})
           const service=await cursor.toArray()
           res.json(service)
       })
       app.get('/products/:')
        

    }
    finally{
        // await client.close();
    }

}
run().catch(console.dir);
app.get('/',(req,res)=>{
    res.send('hello world');
    console.log("fantasy");

})
app.listen(port, () => {
    console.log('Example app listening at',port)
  })