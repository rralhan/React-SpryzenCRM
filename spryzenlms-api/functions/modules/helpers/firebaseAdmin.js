import admin  from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('./permissions.json'),
}); 
 
const db = admin.firestore();

export {admin, db};
export default admin;
