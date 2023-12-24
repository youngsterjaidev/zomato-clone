// importing the packages
const express = require('express')
const bodyparser = require('body-parser')
const mongodb = require('mongodb')

//declaring the express app
const app = express()

//Mongodb Confriguration
const { MongoClient } = mongodb
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)

//Middlewares
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const port = 5000
const dbName = "zomato"
const collectionName = "users"

const main = async () => {
    try {

        await client.connect()
        console.log("Database is Connecte")

        const db = client.db(dbName)
        const collection = db.collection(collectionName)
        app.get("/", (req, res) => {
            res.send("server is live!")
        })


        //Post
        //Login
        app.post("/login", async (req, res) => {
            //Fetch the data from the request
            console.log(req)
            let email = req.body.email
            let password = req.body.password
            console.log("Requested Data:", req.body)

            //Check the email and password values in my database
            let result = await collection.findOne({ email: email })
            console.log("the data from database", result)

            if (result === null) {
                res.json({ "message": "Email is not Registered" })
                return
            }
            if (result.password !== password) {
                res.json({ "message": "credential is not valid" })
                return
            }
            //send the respone login success otherwise credintails are not valid
            res.send({ "message": "welcome to zomato" })
        })

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (e) { }
}

main()