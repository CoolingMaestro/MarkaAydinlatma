import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(value);
  };

  return (
    <div className="card group relative overflow-hidden">
      <Link href={`/urun/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-ivory">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          {(isNew || isSale) && (
            <div className="absolute top-4 left-4 z-10">
              {isNew && (
                <span className="inline-block bg-sapphire text-ivory text-xs font-semibold px-3 py-1 rounded-full mr-2">
                  YENİ
                </span>
              )}
              {isSale && (
                <span className="inline-block bg-gold text-coal text-xs font-semibold px-3 py-1 rounded-full">
                  İNDİRİM
                </span>
              )}
            </div>
          )}
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-ivory/90 backdrop-blur-sm rounded-full flex items-center justify-center text-coal hover:bg-gold hover:text-coal transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Favorilere ekle"
          >
            <FiHeart className="w-5 h-5" />
          </button>
        </div>
      </Link>

      <div className="p-6">
        <p className="text-mocha text-sm font-medium mb-2">{category}</p>
        <h3 className="text-coal font-playfair font-semibold text-lg mb-3 line-clamp-2">
          <Link href={`/urun/${id}`} className="hover:text-gold transition-colors duration-200">
            {name}
          </Link>
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-coal font-playfair font-bold text-xl tracking-tight">
              {formatPrice(price)}
            </p>
            {oldPrice && (
              <p className="text-mocha/60 text-sm line-through">{formatPrice(oldPrice)}</p>
            )}
          </div>
          <button
            className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-coal hover:brightness-[88%] transition-all duration-200 group/btn"
            aria-label="Sepete ekle"
          >
            <FiShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}