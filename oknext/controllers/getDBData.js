// import the DB model and stuff here later
const db = require('../db/okNextModel');

const getDBData = (handler) => {
  return async (req, res, data) => {
    
    //expect frontend to send date, url, and username when making a request
    const { username, date, url } = req.body;
    const endpoint = url.replace('http://localhost:3000/', '');

    //**STORING INFO IN DATABASE**/
    //check if this user already exists in the database 
    try {
      const query = `SELECT username FROM users WHERE username = ${username}`
      const currUser = await db.query(query);
    } catch {
      console.log('User does not exist');
    }
    
    //select their user_id from users table
    console.log('Hello from the DBData function!', data);
    //store all web_vitals, date and user id in web_vitals table 
    
    // console.log('data from DBData', data);
    return handler(req, res, data);
  }
}


module.exports = getDBData;