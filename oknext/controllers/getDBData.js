// import the DB model and stuff here later
const db = require('../db/okNextModel');

const getDBData = (handler) => {
  return async (req, res, data) => {
    //expect frontend to send date, url, and username when making a request
    const { email, date, url } = req.body;
    const endpoint = url.replace('http://localhost:3000/', '');


    //**STORING INFO IN DATABASE**/
    //SELECT user_id from users table
    let query = `SELECT _id FROM users WHERE email = '${email}'`
    const idData = await db.query(query);
    const id = idData.rows[0]['_id']

    //INSERT all web_vitals, date and user id in web_vitals table 
    query = `INSERT INTO web_vitals (date, performance, FCP, time_to_interactivity, speed_index, 
      TBT, LCP, CLS, SEO, accessibility, best_practices, user_id, endpoint) VALUES ('${date}', ${data.performance}, ${Math.round(data.performanceScores.fcp.numericValue)}
      ${Math.round(data.performanceScores.tti.numericValue)}, ${Math.round(data.performanceScores.speed.numericValue)}, ${Math.round(data.performanceScores.tbt.numericValue)}, 
      ${Math.round(data.performanceScores.lcp.numericValue)}, ${Math.round(data.performanceScores.cls.numericValue)}, ${data.seo}, ${data.accessibility}, 
      ${data.bestpractices}, ${id}, ${endpoint}) RETURNING *`
      const userData = await db.query(query);
      console.log('user data here!', userData);
      data = 'hello from DBData :)';
    // console.log('data from DBData', data);
    return handler(req, res, data);
  }
}


module.exports = getDBData;