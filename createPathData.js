const fs = require('fs');

fs.readFile('./ic_cloud_48px.svg', 'utf8', (err, data) => {
  console.log(data.substring(data.indexOf('path d="') + 8, data.length - 9));
});
