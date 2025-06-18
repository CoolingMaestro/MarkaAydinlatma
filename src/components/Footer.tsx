import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-ivory/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-coal font-playfair font-bold text-xl">M</span>
              </div>
              <span className="text-ivory font-playfair font-semibold text-xl">
                Marka Aydınlatma
              </span>
            </Link>
            <p className="text-ivory/70 mb-6">
              Premium aydınlatma çözümleri ile mekanlarınıza değer katıyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-ivory/70 hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-ivory/70 hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-ivory/70 hover:text-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-ivory font-playfair font-semibold text-lg mb-6">
              Kategoriler
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/avizeler"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  Avizeler
                </Link>
              </li>
              <li>
                <Link
                  href="/lambalar"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  Lambalar
                </Link>
              </li>
              <li>
                <Link
                  href="/led-aydinlatma"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  LED Aydınlatma
                </Link>
              </li>
              <li>
                <Link
                  href="/dis-mekan"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  Dış Mekan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-ivory font-playfair font-semibold text-lg mb-6">
              Müşteri Hizmetleri
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/siparis-takibi"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  Sipariş Takibi
                </Link>
              </li>
              <li>
                <Link
                  href="/iade-degisim"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  İade ve Değişim
                </Link>
              </li>
              <li>
                <Link
                  href="/garanti"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  Garanti Koşulları
                </Link>
              </li>
              <li>
                <Link
                  href="/sss"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  Sıkça Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-ivory font-playfair font-semibold text-lg mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-ivory/70">
                  Maslak, Ahi Evran Cad. No:6, 34485 Sarıyer/İstanbul
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+902123334455"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  +90 212 333 44 55
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@markaaydinlatma.com"
                  className="text-ivory/70 hover:text-gold transition-colors duration-200"
                >
                  info@markaaydinlatma.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-12 pt-8 text-center">
          <p className="text-ivory/60 text-sm">
            © 2025 Marka Aydınlatma. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}