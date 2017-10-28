const { AdBlockClient } = require('ad-block');
const fs = require('fs');
const axios = require('axios');



function updateEasyList(path) {
  path = path || './data';
  axios.get('https://easylist.to/easylist/easylist.txt')
    .then(function (res) {
      buildBuffer(res.data, path);
      fs.writeFile(path + '/easylist.txt', res.data, function (err) {
        if (err) return console.log(err);
        console.log('saved easylist.txt');
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function buildBuffer(filterRuleData, path) {
  const client = new AdBlockClient();
  client.parse(filterRuleData);
  const buffer = client.serialize();
  fs.writeFile(path + '/buffer', buffer, function (err) {
    if (err) return console.log(err);
    console.log('easlist.txt buffer was saved');
  });
}


module.exports = {
  updateEasyList,
};
