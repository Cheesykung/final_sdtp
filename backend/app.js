const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

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
    db = client.db("test")
    test = db.collection("test")
  }
)

app.get('/', async (req, res) => {
  await test.insertOne({ name: "Thai" })

  res.status(200).send("eiei")
})

app.listen(3000)