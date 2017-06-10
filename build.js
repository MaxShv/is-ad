const { makeAdBlockClientFromFilePath } = require('ad-block/lib/util');
const fs = require('fs');

// build buffer
makeAdBlockClientFromFilePath('./data/easylist.txt').then((c) => {
  const buffer = c.serialize();
  fs.writeFile('./data/buffer', buffer, function (err) {
    if (err) return console.log(err);
    console.log('easlist.txt buffer was saved');
  });
});
