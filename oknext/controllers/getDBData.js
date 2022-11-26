// import the DB model and stuff here later
const db = require('../db/okNextModel');

const getDBData = (handler) => {
  return async (req, res, data) => {
    //expect frontend to send date, url, and username when making a request
    const { email, date, url } = req.body;
    const endpoint = url.replace('http://localhost:3000/', '');

    console.log(email, date, endpoint, 'this is data', data);

    //**STORING INFO IN DATABASE**/
    //SELECT user_id from users table
    const query = `SELECT _id FROM users WHERE email = '${email}'`
    const idData = await db.query(query);
    const id = idData.rows[0]['_id']
    console.log(id);

    //INSERT all web_vitals, date and user id in web_vitals table 
    
    // console.log('data from DBData', data);
    return handler(req, res, data);
  }
}


module.exports = getDBData;