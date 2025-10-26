const fs = require('fs');

const width = 600;
const height = 200;
const cols = 10;
const rows = 5;
const blockSize = width / cols;

function randomColor() {
  const colors = ['#ff4d4d','#4dff4d','#4d4dff','#ffff4d','#ff4dff','#4dffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
<rect width="${width}" height="${height}" fill="#0d0d0d"/>`;

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    if (Math.random() > 0.6) { // random blocks
      const color = randomColor();
      const yOffset = Math.floor(Math.random() * (height - blockSize));
      svg += `<rect x="${c*blockSize}" y="${yOffset}" width="${blockSize-2}" height="${blockSize-2}" fill="${color}"/>`;
    }
  }
}

svg += `</svg>`;

// Save file
fs.writeFileSync('assets/live-tetris.svg', svg);
console.log('✅ Tetris Live SVG updated!');
