import {db} from '../helpers/firebaseAdmin.js';
import app from '../helpers/expressSettings.js';

const location = app;

//get locations by organization
location.get('/getLocationsByOrgId/:orgId', async (req, resp) => {
	const orgId = req.params.orgId;
	
	db.collection('Organizations').doc(orgId)
	.get().then(async (orgDoc) =>
	{
		if(orgDoc.exists)
		{
			let retval = [];
			const locList = await orgDoc.ref.collection("Locations").get();
			if(locList)
			{
				locList.forEach((loc) =>{
					const locId = loc.id;
					const locData = loc.data();
				  	console.log(locId, " =>=> ", locData);   
				  	retval.push({locId, ...locData})
				});
				return resp.status(200).send(JSON.stringify(retval));
			}		
		}
		return resp.status(400).send("Please send a valid orgId");
	});			
});

location.get('/getLocationById/:orgId/:locId', async (req, resp) => {
	const orgId = req.params.orgId;
	const locId = req.params.locId;
	
	const orgDoc = await db.collection('Organizations').doc(orgId).get();
	if(orgDoc)	{
		if(orgDoc.exists)
		{
			let retval = [];
			const loc = await orgDoc.ref.collection("Locations").doc(locId).get();
			if(loc)
			{	
				const locId = loc.id;
				const locData = loc.data();
				console.log(locId, " =>=> ", locData);   
				retval.push({locId, ...locData})
				
				return resp.status(200).send(JSON.stringify(retval));
			}	
			return resp.status(400).send("Please send a valid locId");	
		}
		return resp.status(400).send("Please send a valid orgId");
	}		
});


export default location;
