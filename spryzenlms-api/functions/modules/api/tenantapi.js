import {db} from '../helpers/firebaseAdmin.js';
import app from '../helpers/expressSettings.js';
import authMiddleware from '../utilities/authMiddleware.js'

const tenant = app;

// Get All tenants
tenant.get('/getAll', async (req, resp) => {
	const docs = [];
	db.collection('Tenants')
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
                const id = doc.id;
                const data = doc.data();
				docs.push({id,...data});
			});
			resp.status(200).send(JSON.stringify(docs));
		});
});


tenant.get('/getById/:id',authMiddleware.validateFirebaseIdToken, async (req, resp) => {
    const id = req.params.id;

    if(!id || id.trim() == '')
    {
        return resp.status(400).send("Please send a valid Id");
    }
    var docRef = db.collection('Tenants').doc(id);
	docRef.get()
		.then((doc) => {
            if(doc.exists)
            {
                const docId = doc.id;
                const docData = doc.data();
                const data = {docId, ...docData};
                console.log(doc.id, ' => ', docData);                
				return resp.status(200).send(JSON.stringify(data));
            }			
            return resp.status(404).send("Document not found");
		});
});

tenant.get('/getByName/:name',authMiddleware.validateFirebaseIdToken, async (req, resp) => {
    const name = req.params.name;

    if(!name || name.trim() == '')
    {
        return resp.status(400).send("Please send a valid Name");
    }
    db.collection('Tenants')
        .where('Name', '==', name)
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
                const id = doc.id;
                const data = doc.data();
				docs.push({id,...data});
			});
			resp.status(200).send(JSON.stringify(docs));
		});
});

export default tenant;