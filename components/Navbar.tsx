
import React, { useState, useEffect } from 'react';
import { COMPANY } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Productos', href: '#products' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          {COMPANY.name.toUpperCase()}
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button 
          onClick={() => window.location.href = '#contact'}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${isScrolled ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
        >
          Asóciese con nosotros
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
