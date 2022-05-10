const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:20000";
// const url = "mongodb://host.docker.internal:20000";

app.use(express.json())
app.use(cors("*"))

let db

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    const dbo = client.db("test");
    dbo.createCollection("test")

    db = client.db("test")
    test = db.collection("test")
  }
)

app.get('/', async (req, res) => {
  await test.insertOne({ name: "Thai" })

  res.status(200).send("eiei")
})

// app.get('/hello', async (req, res) => {
//   await test.insertOne({ name: "Thai" })

//   let result = await test.find().toArray()

//   res.status(200).send(result)
// })

app.get('/:name', async (req, res) => {
  let name = req.params["name"]

  let result = await test.find({
    "name": name
  }).toArray()

  res.status(200).send(result)
})

app.listen(3000)