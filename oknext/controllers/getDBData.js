// import the DB model and stuff here later

const getDBData = (handler) => {
  return async (req, res, data) => {
    console.log('data from DBData', data);
    return handler(req, res, data);
  }
}


module.exports = getDBData;