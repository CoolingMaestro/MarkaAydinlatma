#!/bin/bash
echo "Marka Aydınlatma - Geliştirme Sunucusu Başlatılıyor..."
echo "=================================================="
echo ""
echo "Site şu adreste çalışacak: http://localhost:3000"
echo ""
echo "Proje yapısı:"
echo "- src/app/page.tsx: Ana sayfa"
echo "- src/app/urunler/page.tsx: Ürünler listesi" 
echo "- src/app/urun/[id]/page.tsx: Ürün detay"
echo "- src/components/: Bileşenler"
echo ""
echo "Next.js kurulumu için: npm install && npm run dev"
echo ""

# Python ile basit HTTP sunucu başlat
cd /home/cooling-maestro/marka-aydinlatma-website
python3 -m http.server 3000