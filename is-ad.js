const { AdBlockClient, FilterOptions } = require('ad-block');
const fs = require('fs');
const adBlocker = new AdBlockClient();
const path = require('path');
const { updateEasyList } = require('./build');

const isAd = (url, host) => {
  return adBlocker.matches(url, FilterOptions.noFilterOption, host);
};

const filePath = path.resolve(__dirname, 'data/buffer');

fs.readFile(filePath, function(err, buffer) {
  if (err) {
    return console.log(err);
  }
  adBlocker.deserialize(buffer);
});

module.exports = {
  isAd,
  adBlocker,
  updateEasyList,
};
