// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Layout, Button, Card, Input, Badge, Carousel, Divider, ConfigProvider, Typography, Row, Col } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, MenuOutlined, RightOutlined, LeftOutlined, ArrowUpOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const App: React.FC = () => {
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 50) {
setScrolled(true);
} else {
setScrolled(false);
}
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
useEffect(() => {
const chartDom = document.getElementById('sales-chart');
if (chartDom) {
const myChart = echarts.init(chartDom);
const option = {
animation: false,
tooltip: {
trigger: 'axis'
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},
xAxis: {
type: 'category',
boundaryGap: false,
data: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem'],
axisLine: {
lineStyle: {
color: '#D4AF37'
}
}
},
yAxis: {
type: 'value',
axisLine: {
lineStyle: {
color: '#D4AF37'
}
},
splitLine: {
lineStyle: {
color: '#604B3A'
}
}
},
series: [
{
name: 'Satışlar',
type: 'line',
stack: 'Total',
data: [120, 132, 101, 134, 90, 230, 210],
lineStyle: {
color: '#D4AF37'
},
itemStyle: {
color: '#D4AF37'
},
areaStyle: {
color: {
type: 'linear',
x: 0,
y: 0,
x2: 0,
y2: 1,
colorStops: [
{
offset: 0,
color: 'rgba(212, 175, 55, 0.6)'
},
{
offset: 1,
color: 'rgba(212, 175, 55, 0.1)'
}
]
}
}
}
]
};
myChart.setOption(option);
window.addEventListener('resize', () => {
myChart.resize();
});
return () => {
myChart.dispose();
window.removeEventListener('resize', () => {
myChart.resize();
});
};
}
}, []);
const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
};
const categories = [
{ name: 'Modern Avizeler', icon: 'fas fa-lightbulb' },
{ name: 'Şarkıt Avizeler', icon: 'fas fa-sun' },
{ name: 'Armatürler', icon: 'fas fa-lamp' },
{ name: 'Lineer Aydınlatma', icon: 'fas fa-grip-lines' },
{ name: 'Sıva Altı Aydınlatma', icon: 'fas fa-square' },
{ name: 'Sıva Üstü Aydınlatma', icon: 'fas fa-cube' },
{ name: 'Dış Mekan Aydınlatma', icon: 'fas fa-tree' },
{ name: 'Hasır ve Bambu Avizeler', icon: 'fas fa-fan' },
{ name: 'Masa Lambası', icon: 'fas fa-desk' }
];
const featuredProducts = [
{
id: 1,
name: 'Modern Kristal Avize',
price: '2.499,00 ₺',
rating: 4.8,
image: 'https://readdy.ai/api/search-image?query=Elegant%20modern%20crystal%20chandelier%20with%20gold%20metal%20frame%2C%20hanging%20from%20ceiling%2C%20premium%20luxury%20lighting%20fixture%20with%20clear%20crystal%20elements%2C%20minimalist%20design%2C%20soft%20warm%20lighting%2C%20neutral%20background%2C%20high-end%20interior&width=400&height=400&seq=1&orientation=squarish',
discount: '15%'
},
{
id: 2,
name: 'Endüstriyel Tavan Lambası',
price: '1.299,00 ₺',
rating: 4.6,
image: 'https://readdy.ai/api/search-image?query=Industrial%20ceiling%20lamp%20with%20gold%20and%20black%20metal%20frame%2C%20vintage%20style%20pendant%20light%2C%20exposed%20bulb%20design%2C%20warm%20ambient%20lighting%2C%20minimalist%20modern%20fixture%2C%20neutral%20background%2C%20premium%20quality&width=400&height=400&seq=2&orientation=squarish',
discount: '10%'
},
{
id: 3,
name: 'Bambu Sarkıt Avize',
price: '1.899,00 ₺',
rating: 4.7,
image: 'https://readdy.ai/api/search-image?query=Handcrafted%20bamboo%20pendant%20light%20with%20natural%20woven%20texture%2C%20bohemian%20style%20hanging%20lamp%2C%20warm%20golden%20light%20filtering%20through%20bamboo%20slats%2C%20creating%20beautiful%20shadow%20patterns%2C%20neutral%20background%2C%20premium%20craftsmanship&width=400&height=400&seq=3&orientation=squarish',
discount: '20%'
},
{
id: 4,
name: 'Minimalist Duvar Apliği',
price: '899,00 ₺',
rating: 4.5,
image: 'https://readdy.ai/api/search-image?query=Minimalist%20wall%20sconce%20with%20gold%20metal%20finish%2C%20modern%20geometric%20wall%20light%20fixture%2C%20soft%20ambient%20glow%2C%20clean%20lines%2C%20architectural%20lighting%20design%2C%20neutral%20background%2C%20premium%20quality&width=400&height=400&seq=4&orientation=squarish'
}
];
const newArrivals = [
{
id: 5,
name: 'Geometrik LED Avize',
price: '3.299,00 ₺',
rating: 4.9,
image: 'https://readdy.ai/api/search-image?query=Geometric%20LED%20chandelier%20with%20gold%20metal%20frame%2C%20modern%20luxury%20lighting%20with%20multiple%20geometric%20shapes%2C%20warm%20white%20LED%20lights%2C%20contemporary%20design%20statement%20piece%2C%20neutral%20background%2C%20premium%20quality&width=400&height=400&seq=5&orientation=squarish'
},
{
id: 6,
name: 'Nordik Ahşap Lambader',
price: '1.599,00 ₺',
rating: 4.7,
image: 'https://readdy.ai/api/search-image?query=Nordic%20wooden%20floor%20lamp%20with%20gold%20accents%2C%20natural%20wood%20texture%2C%20fabric%20lampshade%2C%20warm%20ambient%20lighting%2C%20scandinavian%20minimalist%20design%2C%20neutral%20background%2C%20premium%20craftsmanship&width=400&height=400&seq=6&orientation=squarish'
},
{
id: 7,
name: 'Art Deco Masa Lambası',
price: '1.199,00 ₺',
rating: 4.6,
image: 'https://readdy.ai/api/search-image?query=Art%20deco%20table%20lamp%20with%20gold%20base%20and%20white%20glass%20shade%2C%20geometric%20patterns%2C%20luxury%20vintage%20style%2C%20warm%20ambient%20glow%2C%20elegant%20desk%20accessory%2C%20neutral%20background%2C%20premium%20quality&width=400&height=400&seq=7&orientation=squarish'
},
{
id: 8,
name: 'Modern Lineer LED',
price: '2.799,00 ₺',
rating: 4.8,
image: 'https://readdy.ai/api/search-image?query=Modern%20linear%20LED%20pendant%20light%20with%20gold%20finish%2C%20sleek%20horizontal%20hanging%20fixture%2C%20adjustable%20height%2C%20bright%20white%20light%2C%20contemporary%20minimalist%20design%2C%20neutral%20background%2C%20premium%20quality&width=400&height=400&seq=8&orientation=squarish'
}
];
const testimonials = [
{
id: 1,
name: 'Ayşe Yılmaz',
text: 'Marka Aydınlatma\'dan aldığım modern avize evimize harika bir hava kattı. Kalite ve tasarım açısından beklentilerimi fazlasıyla karşıladı.',
rating: 5,
position: 'İç Mimar'
},
{
id: 2,
name: 'Mehmet Kaya',
text: 'Hızlı teslimat ve mükemmel müşteri hizmeti. Ürün görseldekiyle birebir aynı geldi. Kesinlikle tekrar alışveriş yapacağım.',
rating: 5,
position: 'Mimar'
},
{
id: 3,
name: 'Zeynep Demir',
text: 'Salon için aldığım kristal avize tam aradığım şeydi. Montaj konusunda da çok yardımcı oldular. Teşekkürler Marka Aydınlatma!',
rating: 4,
position: 'Ev Sahibi'
}
];
const partners = [
{ name: 'Philips', icon: 'fas fa-lightbulb' },
{ name: 'Osram', icon: 'fas fa-bolt' },
{ name: 'Schneider', icon: 'fas fa-plug' },
{ name: 'Legrand', icon: 'fas fa-network-wired' },
{ name: 'Viko', icon: 'fas fa-toggle-on' }
];
return (
<ConfigProvider
theme={{
token: {
colorPrimary: '#D4AF37',
colorBgBase: '#111314',
colorTextBase: '#F6F5F2',
borderRadius: 8,
},
}}
>
<Layout className="min-h-screen bg-[#111314]">
<Header
className={`fixed w-full z-50 flex items-center justify-between py-5 px-4 transition-all duration-300 ${scrolled ? 'bg-[#111314] shadow-md' : 'bg-transparent'}`}
style={{ padding: 0, height: 'auto', top: '0' }}
>
<div className="container mx-auto flex items-center justify-between px-8">
<div className="flex items-center">
<h1 className="text-[#D4AF37] text-xl font-bold m-0 leading-tight text-center mr-8">
Marka<br />Aydınlatma
</h1>
</div>
<div className="hidden lg:flex items-center space-x-4">
{categories.slice(0, 6).map((category, index) => (
<a key={index} href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer whitespace-nowrap text-sm">
{category.name}
</a>
))}
<div className="relative group cursor-pointer mr-8">
<span className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 flex items-center whitespace-nowrap">
Daha Fazla <i className="fas fa-chevron-down ml-1 text-xs"></i>
</span>
<div className="absolute left-0 mt-2 w-48 bg-[#111314] border border-[#604B3A] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
{categories.slice(6).map((category, index) => (
<a key={index} href="#" className="block px-4 py-2 text-sm text-[#F6F5F2] hover:bg-[#604B3A] hover:text-[#D4AF37]">
{category.name}
</a>
))}
</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="relative hidden md:block">
<Input
placeholder="Ara..."
prefix={<SearchOutlined className="text-[#D4AF37]" />}
className="bg-[#111314] border-[#604B3A] hover:border-[#D4AF37] focus:border-[#D4AF37] rounded-lg w-40 text-sm"
style={{ background: '#111314', borderColor: '#604B3A' }}
/>
</div>
<div className="flex items-center space-x-4">
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer">
<UserOutlined className="text-xl" />
</a>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer">
<HeartOutlined className="text-xl" />
</a>
<a href="#" className="relative text-[#D4AF37] hover:text-[#F6F5F2] transition-colors duration-200 cursor-pointer">
<ShoppingCartOutlined className="text-xl" />
<Badge count={3} className="absolute -top-1 -right-1" style={{ backgroundColor: '#D4AF37', color: '#111314', transform: 'scale(0.75)' }} />
</a>
<button
className="lg:hidden text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
<MenuOutlined className="text-xl" />
</button>
</div>
</div>
</div>
</Header>
{mobileMenuOpen && (
<div className="fixed inset-0 bg-[#111314] z-40 pt-20 px-6 overflow-y-auto lg:hidden">
<div className="flex flex-col space-y-4">
<div className="relative mb-4">
<Input
placeholder="Ara..."
prefix={<SearchOutlined className="text-[#D4AF37]" />}
className="bg-[#111314] border-[#604B3A] hover:border-[#D4AF37] focus:border-[#D4AF37] rounded-lg w-full text-sm"
style={{ background: '#111314', borderColor: '#604B3A' }}
/>
</div>
{categories.map((category, index) => (
<a key={index} href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 py-2 border-b border-[#604B3A] flex items-center">
<i className={`${category.icon} mr-3 text-[#D4AF37]`}></i>
{category.name}
</a>
))}
<div className="pt-4 flex flex-col space-y-4">
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 flex items-center">
<UserOutlined className="mr-3 text-[#D4AF37]" /> Hesabım
</a>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 flex items-center">
<HeartOutlined className="mr-3 text-[#D4AF37]" /> Favorilerim
</a>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200 flex items-center">
<ShoppingCartOutlined className="mr-3 text-[#D4AF37]" /> Sepetim (3)
</a>
</div>
<Button
type="primary"
className="mt-6 !rounded-button whitespace-nowrap"
onClick={() => setMobileMenuOpen(false)}
>
Kapat
</Button>
</div>
</div>
)}
<Content className="pt-16">
{/* Hero Section */}
<div className="relative h-[600px] overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxurious%20modern%20interior%20with%20elegant%20gold%20chandelier%2C%20warm%20ambient%20lighting%20creating%20a%20cozy%20atmosphere%2C%20premium%20home%20decor%20with%20dark%20background%20transitioning%20to%20light%20on%20the%20right%20side%2C%20perfect%20for%20showcasing%20lighting%20products%2C%20high-end%20photography%20style&width=1440&height=600&seq=9&orientation=landscape')`,
backgroundPosition: 'center',
}}
>
<div className="absolute inset-0 bg-gradient-to-r from-[#111314] via-[#11131499] to-transparent"></div>
</div>
<div className="container mx-auto h-full flex items-center">
<div className="max-w-lg px-6 md:pl-8 relative z-10">
<h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4 leading-tight">Evinizi Aydınlatmanın En Şık Yolu</h1>
<p className="text-lg text-[#F6F5F2] mb-6">2025'in en yeni ve modern aydınlatma ürünleriyle yaşam alanlarınıza stil katın. Premium kalite, uygun fiyat.</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<Button
type="primary"
size="large"
className="!rounded-button whitespace-nowrap"
style={{ backgroundColor: '#D4AF37', borderColor: '#D4AF37', color: '#111314' }}
>
Hemen Keşfet
</Button>
<Button
size="large"
className="border-[#D4AF37] text-[#D4AF37] hover:text-[#111314] hover:bg-[#D4AF37] !rounded-button whitespace-nowrap"
>
Katalog İndir
</Button>
</div>
</div>
</div>
</div>
{/* Featured Products */}
<div className="py-16 bg-[#111314]">
<div className="container mx-auto px-6">
<div className="flex justify-between items-center mb-10">
<h2 className="text-3xl font-bold text-[#D4AF37]">Öne Çıkan Ürünler</h2>
<div className="flex space-x-2">
<Button
icon={<LeftOutlined />}
className="border-[#604B3A] text-[#D4AF37] hover:border-[#D4AF37] hover:text-[#F6F5F2] !rounded-button whitespace-nowrap"
id="featured-prev"
/>
<Button
icon={<RightOutlined />}
className="border-[#604B3A] text-[#D4AF37] hover:border-[#D4AF37] hover:text-[#F6F5F2] !rounded-button whitespace-nowrap"
id="featured-next"
/>
</div>
</div>
<Swiper
slidesPerView={1}
spaceBetween={20}
pagination={{
clickable: true,
}}
navigation={{
prevEl: '#featured-prev',
nextEl: '#featured-next',
}}
modules={[Pagination, Autoplay]}
autoplay={{
delay: 5000,
disableOnInteraction: false,
}}
breakpoints={{
640: {
slidesPerView: 2,
},
1024: {
slidesPerView: 4,
},
}}
className="mySwiper"
>
{featuredProducts.map((product) => (
<SwiperSlide key={product.id}>
<Card
hoverable
className="bg-[#F6F5F2] rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
cover={
<div className="relative h-64 overflow-hidden">
<img
alt={product.name}
src={product.image}
className="w-full h-full object-cover object-top"
/>
{product.discount && (
<div className="absolute top-3 left-3 bg-[#D4AF37] text-[#111314] px-2 py-1 rounded-md font-semibold text-sm">
{product.discount} İndirim
</div>
)}
<div className="absolute top-3 right-3 bg-[#111314] bg-opacity-70 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
<HeartOutlined className="text-[#D4AF37] text-lg" />
</div>
</div>
}
bodyStyle={{ padding: '16px', background: '#F6F5F2' }}
>
<h3 className="text-[#111314] font-semibold text-lg mb-2">{product.name}</h3>
<div className="flex justify-between items-center">
<span className="text-[#D4AF37] font-bold text-xl">{product.price}</span>
<div className="flex items-center">
<i className="fas fa-star text-[#D4AF37] mr-1"></i>
<span className="text-[#604B3A] font-medium">{product.rating}</span>
</div>
</div>
<Button
type="primary"
block
className="mt-4 !rounded-button whitespace-nowrap"
style={{ backgroundColor: '#D4AF37', borderColor: '#D4AF37', color: '#111314' }}
>
Sepete Ekle
</Button>
</Card>
</SwiperSlide>
))}
</Swiper>
</div>
</div>
{/* Banner */}
<div className="py-16 relative overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20interior%20with%20multiple%20elegant%20gold%20chandeliers%20and%20pendant%20lights%2C%20showroom%20display%20of%20premium%20lighting%20fixtures%2C%20warm%20ambient%20glow%2C%20high-end%20interior%20design%20showcase%2C%20professional%20photography%20with%20dramatic%20lighting&width=1440&height=500&seq=15&orientation=landscape')`
}}
>
<div className="absolute inset-0 bg-[#111314] bg-opacity-70"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">Özel Tasarım Aydınlatma Çözümleri</h2>
<p className="text-[#F6F5F2] text-lg mb-8">Projeleriniz için özel tasarım aydınlatma çözümleri sunuyoruz. Mimarlar ve iç mimarlar için profesyonel destek.</p>
<Button
type="primary"
size="large"
className="!rounded-button whitespace-nowrap"
style={{ backgroundColor: '#D4AF37', borderColor: '#D4AF37', color: '#111314' }}
>
Bizimle İletişime Geçin
</Button>
</div>
</div>
</div>
{/* New Arrivals */}
<div className="py-16 bg-[#111314]">
<div className="container mx-auto px-6">
<div className="flex justify-between items-center mb-10">
<h2 className="text-3xl font-bold text-[#D4AF37]">Yeni Gelenler</h2>
<a href="#" className="text-[#D4AF37] hover:text-[#F6F5F2] transition-colors duration-200 flex items-center cursor-pointer">
Tümünü Gör <RightOutlined className="ml-2" />
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{newArrivals.map((product) => (
<Card
key={product.id}
hoverable
className="bg-[#F6F5F2] rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
cover={
<div className="relative h-64 overflow-hidden">
<img
alt={product.name}
src={product.image}
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-3 left-3 bg-[#2B5C9B] text-[#F6F5F2] px-2 py-1 rounded-md font-semibold text-sm">
Yeni
</div>
<div className="absolute top-3 right-3 bg-[#111314] bg-opacity-70 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
<HeartOutlined className="text-[#D4AF37] text-lg" />
</div>
</div>
}
bodyStyle={{ padding: '16px', background: '#F6F5F2' }}
>
<h3 className="text-[#111314] font-semibold text-lg mb-2">{product.name}</h3>
<div className="flex justify-between items-center">
<span className="text-[#D4AF37] font-bold text-xl">{product.price}</span>
<div className="flex items-center">
<i className="fas fa-star text-[#D4AF37] mr-1"></i>
<span className="text-[#604B3A] font-medium">{product.rating}</span>
</div>
</div>
<Button
type="primary"
block
className="mt-4 !rounded-button whitespace-nowrap"
style={{ backgroundColor: '#D4AF37', borderColor: '#D4AF37', color: '#111314' }}
>
Sepete Ekle
</Button>
</Card>
))}
</div>
</div>
</div>
{/* Features */}
<div className="py-16 bg-[#111314]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-[#D4AF37] mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
<p className="text-[#F6F5F2] text-lg max-w-2xl mx-auto">Kaliteli ürünler, uygun fiyatlar ve mükemmel müşteri hizmetleri ile aydınlatma ihtiyaçlarınız için doğru adres.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#111314] border border-[#604B3A] rounded-lg p-6 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_5px_20px_rgba(212,175,55,0.2)]">
<div className="text-[#D4AF37] text-4xl mb-4">
<i className="fas fa-shipping-fast"></i>
</div>
<h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Hızlı Teslimat</h3>
<p className="text-[#F6F5F2]">Siparişleriniz aynı gün kargoya verilir ve en geç 3 iş günü içerisinde teslim edilir.</p>
</div>
<div className="bg-[#111314] border border-[#604B3A] rounded-lg p-6 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_5px_20px_rgba(212,175,55,0.2)]">
<div className="text-[#D4AF37] text-4xl mb-4">
<i className="fas fa-medal"></i>
</div>
<h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Kalite Garantisi</h3>
<p className="text-[#F6F5F2]">Tüm ürünlerimiz 2 yıl garantilidir. Herhangi bir sorun yaşamanız durumunda değişim yapılır.</p>
</div>
<div className="bg-[#111314] border border-[#604B3A] rounded-lg p-6 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_5px_20px_rgba(212,175,55,0.2)]">
<div className="text-[#D4AF37] text-4xl mb-4">
<i className="fas fa-headset"></i>
</div>
<h3 className="text-xl font-semibold text-[#D4AF37] mb-3">7/24 Destek</h3>
<p className="text-[#F6F5F2]">Müşteri hizmetlerimiz 7 gün 24 saat hizmetinizdedir. Sorularınız için bize ulaşabilirsiniz.</p>
</div>
</div>
</div>
</div>
{/* Testimonials */}
<div className="py-16 bg-[#111314]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-[#D4AF37] mb-4">Müşteri Yorumları</h2>
<p className="text-[#F6F5F2] text-lg max-w-2xl mx-auto">Müşterilerimizin deneyimlerini ve görüşlerini okuyun.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{testimonials.map((testimonial) => (
<div
key={testimonial.id}
className="bg-[#111314] border border-[#604B3A] rounded-lg p-6 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_5px_20px_rgba(212,175,55,0.2)]"
>
<div className="flex items-center mb-4">
{[...Array(5)].map((_, i) => (
<i
key={i}
className={`fas fa-star ${i < testimonial.rating ? 'text-[#D4AF37]' : 'text-[#604B3A]'} mr-1`}
></i>
))}
</div>
<p className="text-[#F6F5F2] mb-4 italic">"{testimonial.text}"</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#111314] font-bold mr-3">
{testimonial.name.charAt(0)}
</div>
<div>
<h4 className="text-[#D4AF37] font-semibold">{testimonial.name}</h4>
<p className="text-[#F6F5F2] text-sm">{testimonial.position}</p>
</div>
</div>
</div>
))}
</div>
</div>
</div>
{/* Stats */}
<div className="py-16 bg-[#111314]">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl font-bold text-[#D4AF37] mb-6">Rakamlarla Marka Aydınlatma</h2>
<p className="text-[#F6F5F2] text-lg mb-8">2025 yılında müşteri memnuniyetinde %98 oranına ulaştık. Türkiye'nin en çok tercih edilen aydınlatma markası olmaktan gurur duyuyoruz.</p>
<div className="grid grid-cols-2 gap-6">
<div className="bg-[#111314] border border-[#604B3A] rounded-lg p-4 transition-all duration-300 hover:border-[#D4AF37]">
<h3 className="text-[#D4AF37] text-3xl font-bold mb-2">10,000+</h3>
<p className="text-[#F6F5F2]">Mutlu Müşteri</p>
</div>
<div className="bg-[#111314] border border-[#604B3A] rounded-lg p-4 transition-all duration-300 hover:border-[#D4AF37]">
<h3 className="text-[#D4AF37] text-3xl font-bold mb-2">5,000+</h3>
<p className="text-[#F6F5F2]">Tamamlanan Proje</p>
</div>
<div className="bg-[#111314] border border-[#604B3A] rounded-lg p-4 transition-all duration-300 hover:border-[#D4AF37]">
<h3 className="text-[#D4AF37] text-3xl font-bold mb-2">1,500+</h3>
<p className="text-[#F6F5F2]">Ürün Çeşidi</p>
</div>
<div className="bg-[#111314] border border-[#604B3A] rounded-lg p-4 transition-all duration-300 hover:border-[#D4AF37]">
<h3 className="text-[#D4AF37] text-3xl font-bold mb-2">15+</h3>
<p className="text-[#F6F5F2]">Yıllık Deneyim</p>
</div>
</div>
</div>
<div className="h-80">
<div id="sales-chart" className="w-full h-full"></div>
</div>
</div>
</div>
</div>
{/* Partners */}
<div className="py-16 bg-[#111314]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-[#D4AF37] mb-4">İş Ortaklarımız</h2>
<p className="text-[#F6F5F2] text-lg max-w-2xl mx-auto">Dünya'nın önde gelen aydınlatma markalarının Türkiye distribütörüyüz.</p>
</div>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
{partners.map((partner, index) => (
<div key={index} className="text-center">
<div className="w-20 h-20 rounded-full bg-[#111314] border border-[#604B3A] flex items-center justify-center mb-3 mx-auto transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
<i className={`${partner.icon} text-[#D4AF37] text-3xl`}></i>
</div>
<p className="text-[#F6F5F2] font-medium">{partner.name}</p>
</div>
))}
</div>
</div>
</div>
{/* Newsletter */}
<div className="py-16 bg-[#111314]">
<div className="container mx-auto px-6">
<div className="max-w-3xl mx-auto bg-[#111314] border border-[#604B3A] rounded-lg p-8 text-center">
<h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Bültenimize Abone Olun</h2>
<p className="text-[#F6F5F2] mb-6">Yeni ürünler, indirimler ve kampanyalardan haberdar olmak için bültenimize abone olun.</p>
<div className="flex flex-col sm:flex-row gap-4">
<Input
placeholder="E-posta adresiniz"
className="flex-grow bg-[#111314] border-[#604B3A] hover:border-[#D4AF37] focus:border-[#D4AF37] rounded-lg text-[#F6F5F2]"
style={{ background: '#111314', borderColor: '#604B3A' }}
/>
<Button
type="primary"
className="!rounded-button whitespace-nowrap"
style={{ backgroundColor: '#D4AF37', borderColor: '#D4AF37', color: '#111314' }}
>
Abone Ol
</Button>
</div>
</div>
</div>
</div>
</Content>
<Footer className="bg-[#111314] border-t border-[#604B3A] pt-16 pb-8">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div>
<h3 className="text-xl font-bold text-[#D4AF37] mb-6">Marka Aydınlatma</h3>
<p className="text-[#F6F5F2] mb-6">2010 yılından beri Türkiye'nin en kaliteli aydınlatma ürünlerini müşterilerimizle buluşturuyoruz.</p>
<div className="flex space-x-4">
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
<i className="fab fa-youtube"></i>
</a>
</div>
</div>
<div>
<h3 className="text-xl font-bold text-[#D4AF37] mb-6">Kategoriler</h3>
<ul className="space-y-3">
{categories.slice(0, 6).map((category, index) => (
<li key={index}>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
{category.name}
</a>
</li>
))}
</ul>
</div>
<div>
<h3 className="text-xl font-bold text-[#D4AF37] mb-6">Bilgi</h3>
<ul className="space-y-3">
<li>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
Hakkımızda
</a>
</li>
<li>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
İletişim
</a>
</li>
<li>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
Gizlilik Politikası
</a>
</li>
<li>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
Teslimat Bilgileri
</a>
</li>
<li>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
İade ve Değişim
</a>
</li>
<li>
<a href="#" className="text-[#F6F5F2] hover:text-[#D4AF37] transition-colors duration-200">
Sıkça Sorulan Sorular
</a>
</li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold text-[#D4AF37] mb-6">İletişim</h3>
<ul className="space-y-3">
<li className="flex items-start">
<i className="fas fa-map-marker-alt text-[#D4AF37] mt-1 mr-3"></i>
<span className="text-[#F6F5F2]">Bağdat Caddesi No: 123, Kadıköy, İstanbul</span>
</li>
<li className="flex items-center">
<i className="fas fa-phone-alt text-[#D4AF37] mr-3"></i>
<span className="text-[#F6F5F2]">+90 (212) 123 45 67</span>
</li>
<li className="flex items-center">
<i className="fas fa-envelope text-[#D4AF37] mr-3"></i>
<span className="text-[#F6F5F2]">info@markaaydınlatma.com</span>
</li>
<li className="flex items-center">
<i className="fas fa-clock text-[#D4AF37] mr-3"></i>
<span className="text-[#F6F5F2]">Pazartesi - Cumartesi: 10:00 - 20:00</span>
</li>
</ul>
</div>
</div>
<Divider className="border-[#604B3A]" />
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-[#F6F5F2] text-sm mb-4 md:mb-0">
&copy; 2025 Marka Aydınlatma. Tüm hakları saklıdır.
</p>
<div className="flex items-center space-x-4">
<i className="fab fa-cc-visa text-[#D4AF37] text-2xl"></i>
<i className="fab fa-cc-mastercard text-[#D4AF37] text-2xl"></i>
<i className="fab fa-cc-paypal text-[#D4AF37] text-2xl"></i>
<i className="fab fa-cc-amex text-[#D4AF37] text-2xl"></i>
</div>
</div>
</div>
</Footer>
<button
onClick={scrollToTop}
className="fixed bottom-8 right-8 bg-[#111314] border border-[#D4AF37] text-[#D4AF37] w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 transition-opacity duration-300 cursor-pointer !rounded-button whitespace-nowrap"
style={{ opacity: scrolled ? 1 : 0 }}
>
<ArrowUpOutlined />
</button>
</Layout>
</ConfigProvider>
);
};
export default App