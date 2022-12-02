// const db = require('../../db/okNextModel');
// let finalData;

// async function fetchFromDb(req, res) {
// //SELECT for all web vitals associated with the passed in user_id
// query = `SELECT * FROM web_vitals WHERE user_id = ${id} AND endpoint = '${endpoint}' ORDER BY _id DESC LIMIT 6`
// try {
//   const userData = await db.query(query);
//   finalData = [userData.rows, data.fullAuditReport];
// } catch(error) {
//   console.log('Error here:', error);
// }

// //SELECT for all next.js vitals associated with the passed in user_id
// if (data.nextJs) {
// query = `SELECT * FROM nextjs_vitals WHERE user_id = ${id} AND endpoint = '${endpoint}' ORDER BY _id DESC LIMIT 6`
// try {
//   const nextJsData = await db.query(query);
//   finalData.push(nextJsData.rows);
// } catch(error) {
//   console.log('Error here:', error);
// }
// console.log('Data being sent to frontEnd', finalData);

// return res.json(finalData);

// }
// export default fetchFromDb;