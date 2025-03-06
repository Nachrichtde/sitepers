import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-warm-gray" />
          <span className="text-2xl font-bold text-warm-gray">УСДВ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-dark-gray hover:text-warm-gray transition-colors">
              <span>О сервисе</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link 
                to="/" 
                onClick={() => scrollToSection('benefits')} 
                className="block px-4 py-2 text-sm text-dark-gray hover:bg-warm-gray hover:text-white"
              >
                Преимущества
              </Link>
              <Link 
                to="/" 
                onClick={() => scrollToSection('examples')} 
                className="block px-4 py-2 text-sm text-dark-gray hover:bg-warm-gray hover:text-white"
              >
                Примеры использования
              </Link>
              <Link 
                to="/logistics" 
                className="block px-4 py-2 text-sm text-dark-gray hover:bg-warm-gray hover:text-white"
              >
                Логистика
              </Link>
              <Link 
                to="/" 
                onClick={() => scrollToSection('partners')} 
                className="block px-4 py-2 text-sm text-dark-gray hover:bg-warm-gray hover:text-white"
              >
                Партнеры
              </Link>
              <Link 
                to="/" 
                onClick={() => scrollToSection('why-us')} 
                className="block px-4 py-2 text-sm text-dark-gray hover:bg-warm-gray hover:text-white"
              >
                Почему мы
              </Link>
            </div>
          </div>
          <Link 
            to="/pricing" 
            className="text-dark-gray hover:text-warm-gray transition-colors"
          >
            Тарифы
          </Link>
          <Link 
            to="/faq" 
            className="text-dark-gray hover:text-warm-gray transition-colors"
          >
            FAQ
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Войти
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-dark-gray" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={() => scrollToSection('benefits')} 
              className="text-dark-gray py-2 border-b border-gray-100"
            >
              Преимущества
            </Link>
            <Link 
              to="/" 
              onClick={() => scrollToSection('examples')} 
              className="text-dark-gray py-2 border-b border-gray-100"
            >
              Примеры использования
            </Link>
            <Link 
              to="/logistics" 
              className="text-dark-gray py-2 border-b border-gray-100"
            >
              Логистика
            </Link>
            <Link 
              to="/pricing" 
              className="text-dark-gray py-2 border-b border-gray-100"
            >
              Тарифы
            </Link>
            <Link 
              to="/" 
              onClick={() => scrollToSection('partners')} 
              className="text-dark-gray py-2 border-b border-gray-100"
            >
              Партнеры
            </Link>
            <Link 
              to="/" 
              onClick={() => scrollToSection('why-us')} 
              className="text-dark-gray py-2 border-b border-gray-100"
            >
              Почему мы
            </Link>
            <Link 
              to="/faq" 
              className="text-dark-gray py-2 border-b border-gray-100"
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" className="btn btn-secondary">
                Войти
              </Link>
              <Link to="/login" className="btn btn-primary">
                Начать сделку
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;