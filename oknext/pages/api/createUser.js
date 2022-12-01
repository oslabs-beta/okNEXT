const db = require('../../db/okNextModel');

async function createUser(req, res) {
  const {email} = req.body;
  let output;
  //check is user exists in database
try {
    const query = `SELECT email FROM users WHERE email = '${email}'`
    const existingUser = await db.query(query);

    if (existingUser.rows.length === 0){
      const query = `INSERT INTO users (email) VALUES ('${email}') RETURNING email`
      const newUser = await db.query(query);
      output =  newUser.rows[0];
    } else {
      output = 'User already exists';
    }
} catch (error){
   return res.json('this is an error from user database thank you:', error);
}
return res.status(200).json(output);
}
export default createUser;