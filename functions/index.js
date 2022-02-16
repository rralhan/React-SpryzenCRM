const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

//this is like setting up connectionString
//TODO: UserAuthentication and Authorization
const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors({origin: true}));
const db = admin.firestore();


//Read (GET)
app.get("/", (req, res) => res.status(200).send("Hey there!"));

app.get("/hello", (req, resp) =>{
  return resp.status(200).send("Hello World !!");
});


//Create (POST)
app.post("/create", (req, resp) =>{
  (async () =>{
    try {
        debugger;
        await db.collection('products').doc('/'+ req.body.id + '/').create({
            name: req.body.name
        })
        return resp.status(200).send();
    } catch (error) {
        console.log(error);
        return resp.status(500).send(error);
    }
  })();
});

//Update (PUT)


//Delete (DELETE)

// admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.api = functions.https.onRequest(app);
