const { adBlockDataFileVersion, AdBlockClient, FilterOptions } = require('ad-block');
const { makeAdBlockClientFromFilePath } = require('ad-block/lib/util');
const fs = require('fs');
const adBlocker = new AdBlockClient();

const isAd = (url, host) => {
  return adBlocker.matches(url, FilterOptions.noFilterOption, host);
};

fs.readFile('./data/buffer', function(err, buffer) {
  adBlocker.deserialize(buffer);
});

module.exports = {
  isAd,
  adBlocker,
};
