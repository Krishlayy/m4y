const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/hello/M4Y/m4y-app/src/app';
const filesToFix = [
  'careers/page.tsx',
  'blog/page.tsx',
  'services/page.tsx',
  'about/page.tsx',
  'case-studies/page.tsx',
  'contact/page.tsx'
];

filesToFix.forEach(f => {
  const filePath = path.join(dir, f);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Careers specifically
  if (f === 'careers/page.tsx') {
    content = content.replace('pt-24 pb-32', 'pb-32');
    content = content.replace('pt-40 md:pt-56', 'pt-16 md:pt-24');
  } else if (f === 'contact/page.tsx') {
    content = content.replace('pt-32 pb-24', 'pt-16 pb-24');
  } else {
    // Other pages typically have pt-32 md:pt-something
    content = content.replace(/pt-32 pb-\d+ md:pt-\d+ md:pb-\d+/, match => {
      // replace pt-32 with pt-16 and md:pt-X with md:pt-24
      return match.replace(/pt-32/, 'pt-16').replace(/md:pt-\d+/, 'md:pt-24');
    });
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed padding for', f);
  }
});
