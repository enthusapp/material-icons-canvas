const fs = require('fs');
const path = require("path")
 
const getAllFiles = function(dirPath, objOfFiles) {
  const files = fs.readdirSync(dirPath);
 
  objOfFiles = objOfFiles || {};
 
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      objOfFiles = getAllFiles(dirPath + "/" + file, objOfFiles);
      return;
    }
    if (file.indexOf('svg') < 0) return;
    if (file.indexOf('48px') < 0) return;
    if (dirPath.indexOf('production') < 0) return;
    const key = file.replace(/ic_/g, '').replace(/_48px.svg/g, '');
    objOfFiles[key] = path.join(__dirname, dirPath, "/", file); 
  })
 
  return objOfFiles;
}

const files = getAllFiles('material-design-icons');
const filesKeys = Object.keys(files);
const iconObject = {};
let readIndex = 0;

filesKeys.forEach(key => {
  fs.readFile(files[key], 'utf8', (err, data) => {
    iconObject[key] = data;

    readIndex += 1;
    if (readIndex === filesKeys.length) {
      fs.writeFile(
        'test.js',
        `const icons = ${JSON.stringify(iconObject, null, 2)}`,
        'utf8',
        () => {}
      );
    }
  });
});
