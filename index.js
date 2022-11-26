const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.w89pmsb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const categoriesCollection = client.db('usedPhone').collection('category');
        const phonesCollection = client.db('usedPhone').collection('usedPhones');


        app.get('/category', async (req, res) => {
            const query = {};
            const category = await categoriesCollection.find(query).toArray();
            res.send(category);
        })


        app.get('/category/:catId', async (req, res) => {
            const { catId } = req.params;
            const category = await phonesCollection.find({ category_Id: catId }).toArray();
            res.send(category);
        })
    }
    finally {

    }
} run().catch(er => console.log(er));


app.get('/', (req, res) => {
    res.send('Used product server running');
});

app.listen(port, () => {
    console.log(`Used product server running on server ${port}`);
})