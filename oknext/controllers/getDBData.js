// import the DB model and stuff here later
const db = require('../db/okNextModel');

const getDBData = (handler) => {
  return async (req, res, data) => {
    //expect frontend to send date, url, and username when making a request
    const { email, date, url } = req.body;
    const endpoint = url
    let finalData;

    //**STORING INFO IN DATABASE**/
    //SELECT user_id from users table
    let query = `SELECT _id FROM users WHERE email = '${email}'`
    const idData = await db.query(query);
    const id = idData.rows[0]['_id']

    //INSERT all web_vitals, date and user id in web_vitals table 
    query = `INSERT INTO web_vitals (date, performance, "FCP", time_to_interactivity, speed_index, 
      "TBT", "LCP", "CLS", "SEO", accessibility, best_practices, user_id, endpoint) VALUES ('${date}', ${data.performance}, ${Math.round(data.performanceScores.fcp.numericValue)},
      ${Math.round(data.performanceScores.tti.numericValue)}, ${Math.round(data.performanceScores.speed.numericValue)}, ${Math.round(data.performanceScores.tbt.numericValue)}, 
      ${Math.round(data.performanceScores.lcp.numericValue)}, ${Math.round(data.performanceScores.cls.numericValue)}, ${data.seo}, ${data.accessibility}, 
      ${data.bestpractices}, ${id}, '${endpoint}')`
      try {
        const userData = await db.query(query);
        console.log(userData.rows);
      } catch (error) {
        console.log('opps error here', error);
      }

    //INSERT ALL next_js vitals and date into table 
    if (data.nextJs) {
      query = `INSERT INTO nextjs_vitals (date, nextjs_beforehydrationduration, nextjs_hydrationduration, nextjs_beforerenderstart, user_id, endpoint) VALUES ('${date}', ${data.nextJs.beforeHydrationDuration}, ${data.nextJs.hydrationDuration}, ${data.nextJs.beforeRenderStart}, ${id}, '${endpoint}')`
      try {
        const nextJsData = await db.query(query);
        console.log(nextJsData.rows);
      } catch (error) {
        console.log('opps error here', error);
      }
    }

    //SELECT for all web vitals associated with the passed in user_id
    query = `SELECT * FROM web_vitals WHERE user_id = ${id} AND endpoint = '${endpoint}' ORDER BY _id DESC LIMIT 6`
    try {
      const userData = await db.query(query);
      finalData = [userData.rows, data.fullAuditReport];
    } catch(error) {
      console.log('Error here:', error);
    }

    //SELECT for all next.js vitals associated with the passed in user_id
    if (data.nextJs) {
    query = `SELECT * FROM nextjs_vitals WHERE user_id = ${id} AND endpoint = '${endpoint}' ORDER BY _id DESC LIMIT 6`
    try {
      const nextJsData = await db.query(query);
      finalData.push(nextJsData.rows);
    } catch(error) {
      console.log('Error here:', error);
    }
    console.log('Data being sent to frontEnd', finalData);
  }
  return handler(req, res, finalData);
}

}



module.exports = getDBData;