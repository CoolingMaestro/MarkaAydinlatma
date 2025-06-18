const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log('Request for: ' + req.url);

  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT);
console.log(`Server running at http://localhost:${PORT}/`);
console.log('\nMarka Aydınlatma Development Server');
console.log('====================================');
console.log('Site yapısı:');
console.log('- src/app/page.tsx: Ana sayfa');
console.log('- src/app/urunler/page.tsx: Ürünler listesi');
console.log('- src/app/urun/[id]/page.tsx: Ürün detay');
console.log('- src/components/: Yeniden kullanılabilir bileşenler');
console.log('\nNot: Bu basit bir statik sunucudur. Next.js özellikleri için npm install yapmanız gerekir.');