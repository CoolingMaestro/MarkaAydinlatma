"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { FiFilter } from "react-icons/fi";

const products = [
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
  {
    id: "5",
    name: "Minimalist Masa Lambası",
    price: 1299,
    image: "/api/placeholder/400/400",
    category: "Masa Lambaları",
  },
  {
    id: "6",
    name: "Bahçe Aydınlatma Seti",
    price: 5999,
    image: "/api/placeholder/400/400",
    category: "Dış Mekan",
  },
  {
    id: "7",
    name: "Smart LED Şerit (5 Metre)",
    price: 899,
    image: "/api/placeholder/400/400",
    category: "LED Aydınlatma",
  },
  {
    id: "8",
    name: "Vintage Edison Ampul Seti",
    price: 599,
    image: "/api/placeholder/400/400",
    category: "Ampuller",
  },
];

const categories = [
  "Tümü",
  "Modern Avizeler",
  "LED Aydınlatma",
  "Sarkıt Lambalar",
  "Duvar Lambaları",
  "Masa Lambaları",
  "Dış Mekan",
  "Ampuller",
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "Tümü" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="bg-coal py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair font-bold text-4xl text-ivory text-center">
              Tüm Ürünler
            </h1>
          </div>
        </div>

        <section className="py-16 bg-ivory">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="lg:w-64">
                <div className="bg-white rounded-lg shadow-inner-coal p-6">
                  <h2 className="font-playfair font-semibold text-xl text-coal mb-6 flex items-center">
                    <FiFilter className="mr-2" />
                    Filtrele
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-coal mb-4">Kategori</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                              selectedCategory === category
                                ? "bg-gold text-coal font-semibold"
                                : "text-coal/70 hover:bg-gold/10"
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-coal mb-4">Sırala</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 rounded-md border border-coal/20 text-coal focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="featured">Öne Çıkanlar</option>
                      <option value="price-low">Fiyat: Düşükten Yükseğe</option>
                      <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
                      <option value="name">İsme Göre (A-Z)</option>
                    </select>
                  </div>
                </div>
              </aside>

              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-coal/70">
                    {sortedProducts.length} ürün bulundu
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
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