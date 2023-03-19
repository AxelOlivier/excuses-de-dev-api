const excuses =  require('../../../datas/excuses/excuses.json');

const getAllExcuses = (req, res) => {
    const excuses =  require('../../../datas/excuses/excuses.json');
    return res.json(excuses);
};

const getOneExcusesByID = (req, res) => {
    const {id} = req.params;
    const excuse = excuses.find((excuse) =>excuse["http_code"] === parseInt(id));    

    return excuse ? res.send(excuse) : res.send(404);
};

const postNewExcuse = (req, res) => {
    const { newExcuse } = req.body;
    const lastIdExcuse = (excuses[(excuses.length-1)].http_code) +1

    const objectFormattedExcuse = {
        http_code: lastIdExcuse,
        tag: "user",
        message: newExcuse,
      };

     excuses.push(objectFormattedExcuse);
      return res.json(excuses);
  };

module.exports.getAllExcuses = getAllExcuses;
module.exports.getOneExcusesByID = getOneExcusesByID;
module.exports.postNewExcuse = postNewExcuse;
