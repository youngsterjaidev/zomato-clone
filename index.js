// importing the packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

// declaring the express app
const app = express();

// mongodb configuration
const { MongoClient } = mongodb;
const uri =
  "mongodb+srv://m001-student:m001-password@server967.eltku.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8000;
const dbName = "zomato";
const collectionName = "users";

const main = async () => {
  try {
    await client.connect();
    console.log("Database is connected!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const foodCollection = db.collection("food_items")

    // GET

    app.get("/", (resquest, response) => {
      response.send("Server is Up !");
    });

    // For finding some data from the database
    app.get("/restaurants", async (request, response) => {
      try {
        // fetch all the documents from the collection
        const result = await foodCollection.find().toArray()

        console.log(result)
        response.json(result)
      } catch(e) {
        console.log("Error occured in /product route : ", e)
      }
    })

    app.get("/restaurants/:restaurantName", async (request, response) => {
      try {
        console.log(request.params)

        const regx = new RegExp(`^${request.params.restaurantName}`, "i")

        // find the doc in db
        const result = await foodCollection.find({ "rname": { $regex: regx } }).toArray()

        console.log(result)

        // send json response to the client
        response.json(result)
      } catch(e) {
        console.log("Error Occured : ", e)
      }
    })

    // POST
    // login
    app.post("/login", async (request, response) => {
      // fetch the data from the request
      let email = request.body.email;
      let password = request.body.password;
      console.log("Request Data : ", request.body);

      // check the email and password values in my database
      let result = await collection.findOne({ email: email });
      console.log("The Data from Database", result);

      if (result === null) {
        response.json({ message: "Email is not registered!" });
        return;
      }

      // if the email and password match
      if (result.password !== password) {
        response.json({ message: "Credentail is not valid" });
        return;
      }
      // send the response login success otherwise credintails are not valid
      response.json({ message: "Welcome to the zomato" });
    });

    // register
    app.post("/register", async (request, response) => {
      try {
        // fetch the data from the request
        const username = request.body.username;
        const email = request.body.email;
        const password = request.body.password;

        console.log("The Request Data : ", request.body);

        // checking if the user email is already exists or not
        const feedback = await collection.findOne({ email: email });

        if (feedback !== null) {
          response.json({ message: "Email already exists" });
          return;
        }

        // insert the data in the database
        const result = await collection.insertOne({
          username: username,
          email: email,
          password: password,
        });

        console.log("The feedback i get from database: ", result);
        // if the data is inserted we will send a response
        // data add successfully otherwise
        // something went wrong
        response.json({ message: "User Created Successfully!" });
      } catch (e) {
        // Error handling
        console.log("Error Occured in the register route : ", e);
      }
    });



    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (e) {
    // Error handling
    console.log("Error occured : ", e);
  }
};

main();
