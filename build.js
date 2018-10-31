const { updateEasyList } = require('./update-list');

updateEasyList('./data', () => {
  console.log('Finished building');
});
