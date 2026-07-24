const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/app');

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Spacing for Hero
  content = content.replace(/pt-16 pb-24 md:pt-24 md:pb-32/g, 'pt-40 pb-24 md:pt-48 md:pb-32');
  content = content.replace(/pt-16/g, 'pt-40');
  
  // 2. Containers
  content = content.replace(/container mx-auto px-6 max-w-7xl/g, 'w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto');
  content = content.replace(/container mx-auto px-6 max-w-4xl/g, 'w-full px-6 md:px-12 lg:px-24 max-w-4xl mx-auto');
  content = content.replace(/container mx-auto px-6 max-w-3xl/g, 'w-full px-6 md:px-12 lg:px-24 max-w-3xl mx-auto');
  content = content.replace(/container mx-auto px-6/g, 'w-full px-6 md:px-12 lg:px-24 mx-auto');

  // 3. Typography
  // Massive Hero text
  content = content.replace(/text-5xl md:text-8xl font-bold uppercase/g, 'text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter');
  content = content.replace(/text-5xl md:text-7xl font-bold uppercase/g, 'text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter');
  content = content.replace(/text-4xl md:text-6xl font-bold uppercase/g, 'text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter');
  content = content.replace(/text-4xl md:text-5xl font-bold uppercase/g, 'text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter');
  content = content.replace(/font-bold uppercase/g, 'font-black uppercase tracking-tighter');
  
  // Clean up retro shadows
  content = content.replace(/text-retro-shadow /g, '');
  content = content.replace(/text-retro-shadow/g, '');
  
  // Update gradients to the new brand gradient
  content = content.replace(/bg-gradient-to-r from-[a-z0-9-]+ (via-[a-z0-9-]+ )?to-[a-z0-9-]+/g, 'bg-gradient-to-r from-[#FF3B00] to-[#FFD700]');
  
  // 4. Cards
  content = content.replace(/game-card game-card-[a-z]+/g, 'modern-card');
  content = content.replace(/game-card/g, 'modern-card');

  // 5. Buttons
  content = content.replace(/game-btn/g, 'btn-primary');

  // 6. Structural Borders (remove massive thick borders for cleaner look)
  content = content.replace(/border-y-4 border-black/g, 'border-y border-black/10');
  content = content.replace(/border-t-4 border-black/g, 'border-t border-black/10');
  content = content.replace(/border-b-4 border-black/g, 'border-b border-black/10');

  // 7. Backgrounds (clean up weird background colors)
  content = content.replace(/bg-yellow-200/g, 'bg-gray-50');
  content = content.replace(/bg-purple-200/g, 'bg-gray-50');
  content = content.replace(/bg-blue-200/g, 'bg-gray-50');
  content = content.replace(/bg-green-200/g, 'bg-gray-50');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      refactorFile(fullPath);
    }
  }
}

processDirectory(directoryPath);
// Also refactor Shared.tsx
refactorFile(path.join(__dirname, 'src/components/ui/Shared.tsx'));
console.log('Refactoring complete.');
