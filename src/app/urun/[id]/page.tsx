"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiShoppingCart, FiHeart, FiTruck, FiShield, FiRefreshCw, FiMinus, FiPlus } from "react-icons/fi";

const product = {
  id: "1",
  name: "Kristal Sarkaç Avize - Altın Detaylı",
  price: 8999,
  oldPrice: 11999,
  images: [
    "/api/placeholder/800/800",
    "/api/placeholder/800/800",
    "/api/placeholder/800/800",
    "/api/placeholder/800/800",
  ],
  category: "Modern Avizeler",
  description: `Lüks ve zarafeti bir araya getiren Kristal Sarkaç Avize, yaşam alanlarınıza eşsiz bir dokunuş katıyor. 
  
  Özel kesim kristalleri ve altın detaylarıyla göz alıcı bir tasarıma sahip olan bu avize, modern ve klasik dekorasyonlarla mükemmel uyum sağlar. E27 duy tipine sahip 8 adet ampul yuvası ile geniş alanları aydınlatmak için idealdir.`,
  features: [
    "Özel kesim K9 kristaller",
    "24 ayar altın kaplama detaylar",
    "8 x E27 duy (max 60W)",
    "Ayarlanabilir zincir uzunluğu (50-150cm)",
    "Çap: 80cm, Yükseklik: 100cm",
    "Ağırlık: 12 kg",
  ],
  isNew: true,
  isSale: true,
  stock: 5,
};

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(value);
  };

  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-ivory">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {product.isSale && (
                    <span className="absolute top-4 left-4 bg-gold text-coal text-sm font-bold px-3 py-1 rounded-full">
                      %{discount} İNDİRİM
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImage === index ? "border-gold" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-mocha font-medium mb-2">{product.category}</p>
                  <h1 className="font-playfair font-bold text-3xl text-coal mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-baseline gap-4 mb-6">
                    <p className="font-playfair font-bold text-4xl text-coal tracking-tight">
                      {formatPrice(product.price)}
                    </p>
                    {product.oldPrice && (
                      <p className="text-mocha/60 text-xl line-through">
                        {formatPrice(product.oldPrice)}
                      </p>
                    )}
                  </div>
                  {product.stock <= 5 && (
                    <p className="text-gold font-semibold mb-4">
                      Son {product.stock} adet!
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="font-playfair font-semibold text-xl text-coal mb-4">
                    Ürün Açıklaması
                  </h2>
                  <p className="text-coal/70 whitespace-pre-line">{product.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-playfair font-semibold text-xl text-coal mb-4">
                    Özellikler
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        <span className="text-coal/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-coal/20 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-coal/5 transition-colors duration-200"
                      aria-label="Azalt"
                    >
                      <FiMinus className="w-5 h-5" />
                    </button>
                    <span className="px-6 font-semibold text-coal">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-coal/5 transition-colors duration-200"
                      aria-label="Artır"
                    >
                      <FiPlus className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="btn-primary flex-1 flex items-center justify-center group">
                    <FiShoppingCart className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Sepete Ekle
                  </button>
                  <button
                    className="p-3 border border-coal/20 rounded-lg hover:bg-coal hover:text-ivory transition-all duration-200"
                    aria-label="Favorilere ekle"
                  >
                    <FiHeart className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-coal/10">
                  <div className="text-center">
                    <FiTruck className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-coal/70">Ücretsiz Kargo</p>
                  </div>
                  <div className="text-center">
                    <FiShield className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-coal/70">2 Yıl Garanti</p>
                  </div>
                  <div className="text-center">
                    <FiRefreshCw className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-coal/70">14 Gün İade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}