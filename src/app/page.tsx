import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { FiArrowRight, FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";

const featuredProducts = [
  {
    id: "1",
    name: "Kristal Sarkaç Avize - Altın Detaylı",
    price: 8999,
    oldPrice: 11999,
    image: "/api/placeholder/400/400",
    category: "Modern Avizeler",
    isNew: true,
    isSale: true,
  },
  {
    id: "2",
    name: "Modern LED Tavan Lambası",
    price: 2499,
    image: "/api/placeholder/400/400",
    category: "LED Aydınlatma",
    isNew: true,
  },
  {
    id: "3",
    name: "Endüstriyel Sarkıt Lamba Seti",
    price: 3799,
    image: "/api/placeholder/400/400",
    category: "Sarkıt Lambalar",
  },
  {
    id: "4",
    name: "Lüks Kristal Aplikler (2'li Set)",
    price: 4599,
    oldPrice: 5999,
    image: "/api/placeholder/400/400",
    category: "Duvar Lambaları",
    isSale: true,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
            <div className="absolute inset-0 hero-gradient" />
          </div>
          
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-6 text-gradient-gold leading-tight">
              Işığın Lüks Yorumu
            </h1>
            <p className="text-xl md:text-2xl text-ivory/80 max-w-2xl mx-auto mb-8">
              Premium aydınlatma koleksiyonlarımızla yaşam alanlarınıza değer katın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/avizeler" className="btn-primary inline-flex items-center justify-center group">
                Koleksiyonu Keşfet
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href="/hakkimizda" className="btn-secondary inline-flex items-center justify-center">
                Hakkımızda
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine motion-reduce:animate-none" />
          </div>
        </section>

        <section className="py-24 bg-ivory">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair font-bold text-4xl text-coal mb-4">
                Öne Çıkan Ürünler
              </h2>
              <p className="text-coal/70 text-lg max-w-2xl mx-auto">
                En beğenilen ve trend olan aydınlatma ürünlerimizi keşfedin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/urunler"
                className="inline-flex items-center text-coal font-semibold hover:text-gold transition-colors duration-200 group"
              >
                Tüm Ürünleri Görüntüle
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-coal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiTruck className="w-8 h-8 text-coal" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-ivory mb-2">
                  Ücretsiz Kargo
                </h3>
                <p className="text-ivory/70">1000 TL üzeri alışverişlerde ücretsiz kargo</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiShield className="w-8 h-8 text-coal" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-ivory mb-2">
                  2 Yıl Garanti
                </h3>
                <p className="text-ivory/70">Tüm ürünlerimizde 2 yıl üretici garantisi</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiRefreshCw className="w-8 h-8 text-coal" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-ivory mb-2">
                  Kolay İade
                </h3>
                <p className="text-ivory/70">14 gün içinde kolay iade ve değişim imkanı</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-mocha">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair font-bold text-4xl text-ivory mb-4">
              Özel Tasarım Projeler
            </h2>
            <p className="text-ivory/80 text-lg max-w-2xl mx-auto mb-8">
              Mekanınıza özel aydınlatma çözümleri için bizimle iletişime geçin
            </p>
            <Link href="/iletisim" className="btn-primary inline-flex items-center group">
              Proje Teklifi Al
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}