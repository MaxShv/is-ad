const { AdBlockClient } = require('ad-block');
const fs = require('fs');
const axios = require('axios');



function updateEasyList() {
  axios.get('https://easylist.to/easylist/easylist.txt')
    .then(function (res) {
      buildBuffer(res.data);
      fs.writeFile('./data/easylist.txt', res.data, function (err) {
        if (err) return console.log(err);
        console.log('saved easylist.txt');
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function buildBuffer(filterRuleData) {
  const client = new AdBlockClient();
  client.parse(filterRuleData);
  const buffer = client.serialize();
  fs.writeFile('./data/buffer', buffer, function (err) {
    if (err) return console.log(err);
    console.log('easlist.txt buffer was saved');
  });
}


module.exports = {
  updateEasyList,
};
