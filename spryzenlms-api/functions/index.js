import functions from 'firebase-functions';
import location from './modules/api/locationapi.js';
import tenant from './modules/api/tenantapi.js';
import express from 'express';
import cors from 'cors';

//const db = require('./firebaseAdmin');

//const authMiddleware = require('./modules/api/authMiddleware');

// this is like setting up connectionString
// TODO: UserAuthentication and Authorization

const app = express();
app.use(cors({origin: true}));

app.use('/location',location);
app.use('/tenant',tenant);

// Read (GET)
/* app.get('/',authMiddleware.validateFirebaseIdToken, async (req, res) => {
  const snapshot = await db.collection('users').get();

  const users = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    users.push({id, ...data});
  });

  res.status(200).send(JSON.stringify(users));
}); */

/* app.get('/hello', (req, resp) =>{
  return resp.status(200).send('Hello World !!');
}); */


// Create (POST)
/* app.post('/create', (req, resp) =>{
  (async () =>{
    try {
      await db.collection('products').doc('/'+ req.body.id + '/').create({
        name: req.body.name,
      });
      return resp.status(200).send();
    } catch (error) {
      console.log(error);
      return resp.status(500).send(error);
    }
  })();
}); */

// Update (PUT)


// Delete (DELETE)

// admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const api = functions.https.onRequest(app);

export {api};




/* exports.addMessage = functions.https.onCall((data, context) =>{
  const text = data.text;
  // Authentication / user information is automatically added to the request.
  const uid = context.auth.uid;
  const email = context.auth.token.email;

  return {
    Text: text,
    UserId: uid,
    Email: email,
  };
}); */
