const fs = require('fs');
const basename = require('path').basename;
const slidesPath = './slides';
const tocScriptFile = './resources/js/toc.js';

fs.readdir(slidesPath, (err, files) => {
  if (err) {
    return console.error(err);
  }
  const contents = files.filter(f => f.endsWith('.md')).map(f => basename(f, '.md')).sort();
  const tocScript = `const toc = ${JSON.stringify(contents)};`;
  fs.writeFile(tocScriptFile, tocScript, err => console.error)
});
