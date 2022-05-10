const express = require('express')
const app = express()
const cors = require('cors')
const mongo = require('mongodb').MongoClient;
// const url = "mongodb://localhost:20000"; // when dev
const url = "mongodb://host.docker.internal:20000"; // when build docker
const { PORT = 3000 }  = process.env

app.use(express.json())
app.use(cors("*"))

let db, user

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
    const dbo = client.db("vaccine") // 1st run only
    dbo.createCollection("user") // 1st run only

    db = client.db("vaccine")
    user = db.collection("user")
  }
)

app.get('/:number', async (req, res) => {
  const phone = req.params["number"]

  try {
    await user.insertOne({ phoneNumber: phone })
    res.status(200).send("Data Create")

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error")
  }
})

app.listen(PORT)