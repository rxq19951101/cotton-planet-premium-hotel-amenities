
import React, { useState } from 'react';
import { COMPANY, PRODUCTS } from './constants';
import { Product, Category } from './types';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2000" 
            alt="Hotel de Lujo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-in slide-in-from-bottom duration-1000">
            {COMPANY.name}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto opacity-90 animate-in slide-in-from-bottom delay-200 duration-1000">
            {COMPANY.tagline}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-in slide-in-from-bottom delay-300 duration-1000">
            <a 
              href="#products" 
              className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg"
            >
              Explorar Colección
            </a>
            <a 
              href="#about" 
              className="px-10 py-4 border-2 border-white/50 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Nuestra Historia
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Escenciales Curados</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">Nuestra Gama de Productos</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {['Todos', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
                    activeCategory === cat 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={setSelectedProduct} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Artesanía de Calidad" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-slate-200 rounded-full -z-10"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">El Viaje de Cotton Planet</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-8">Redefiniendo el Confort para Cada Huésped</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {COMPANY.about}
              </p>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Nuestra Misión
                </h3>
                <p className="text-slate-600 italic">
                  "{COMPANY.mission}"
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-slate-500 text-sm">Hoteles Atendidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-slate-500 text-sm">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-slate-500 text-sm">Algodón Sostenible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Hablemos de sus Necesidades</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-md">
                  Ya sea un hotel boutique independiente o una cadena global, ofrecemos soluciones personalizadas que se adaptan a su marca.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>{COMPANY.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>{COMPANY.email}</span>
                  </div>
                </div>

                <div className="mt-12">
                  <button 
                    onClick={() => {
                       const msg = encodeURIComponent("Hola Cotton Planet, me gustaría programar una consulta.");
                       window.open(`https://wa.me/${COMPANY.whatsapp}?text=${msg}`, '_blank');
                    }}
                    className="px-10 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#128C7E] transition-all flex items-center gap-3 shadow-xl hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultor por WhatsApp
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-white/5 p-8 rounded-3xl backdrop-blur-sm">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium opacity-70">Nombre</label>
                      <input type="text" className="w-full bg-white/10 border-white/10 rounded-xl px-4 py-3 focus:bg-white/20 outline-none transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium opacity-70">Nombre del Hotel</label>
                      <input type="text" className="w-full bg-white/10 border-white/10 rounded-xl px-4 py-3 focus:bg-white/20 outline-none transition-all" placeholder="El Gran Hotel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium opacity-70">Correo Electrónico</label>
                    <input type="email" className="w-full bg-white/10 border-white/10 rounded-xl px-4 py-3 focus:bg-white/20 outline-none transition-all" placeholder="juan@hotel.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium opacity-70">Mensaje</label>
                    <textarea className="w-full bg-white/10 border-white/10 rounded-xl px-4 py-3 focus:bg-white/20 outline-none transition-all h-32" placeholder="Cuéntenos en qué productos está interesado..."></textarea>
                  </div>
                  <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                    Enviar Consulta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">{COMPANY.name.toUpperCase()}</h2>
              <p className="text-slate-500 text-sm">© 2024 Cotton Planet Hospitality. Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><span className="sr-only">Instagram</span>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default App;
