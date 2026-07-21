const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/hello/M4Y/m4y-app/src/components/home';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
let count = 0;
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace container classes with full width edge-padded containers
  content = content.replace(/className="container mx-auto[^"]*"/g, 'className="w-full px-6 md:px-12 lg:px-24"');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated', file);
    count++;
  }
});
console.log('Total files updated:', count);
