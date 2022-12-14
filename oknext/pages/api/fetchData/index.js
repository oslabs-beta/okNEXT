const getLHData = require('../../../controllers/getLHData');
const getDBData = require('../../../controllers/getDBData');


const handler = async (req, res, data) => {
  const { method } = req;
  if (method === 'POST') {
    res.status(200).send(data);
  }
}

export default getLHData(getDBData(handler));