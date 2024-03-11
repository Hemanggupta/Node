const fs = require('fs');

function logReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(fileName, `${new Date()}: ${req.ip} ${req.method}: ${req.path}\n`, (err, data) => {
      next();
    });
  };
}

module.exports = { logReqRes };
