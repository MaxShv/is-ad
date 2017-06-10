const { AdBlockClient } = require('ad-block');
const fs = require('fs');

const filterRuleData = fs.readFileSync('./data/easylist.txt', 'utf8');
const client = new AdBlockClient();
client.parse(filterRuleData);
const buffer = client.serialize();
fs.writeFile('./data/buffer', buffer, function (err) {
  if (err) return console.log(err);
  console.log('easlist.txt buffer was saved');
});
