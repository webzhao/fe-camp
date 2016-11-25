const fs = require('fs');
const path = require('path');
const slidesPath = './slides';
const tocScriptFile = './resources/js/toc.js';

const isSection = dir => /section-\d+/i.test(dir);
const isMarkdown = file => file.endsWith('.md');

const dirs = fs.readdirSync(slidesPath);
const sections = dirs.map(dir => path.resolve(slidesPath, dir)).filter(isSection);
const toc = sections.map(dir => {
  return {
    title: path.basename(dir),
    contents: fs.readdirSync(dir).filter(isMarkdown).map(f => path.basename(f, '.md'))
  }
});
const tocScript = `const toc = ${JSON.stringify(toc)};`;
fs.writeFile(tocScriptFile, tocScript, err => console.error);

