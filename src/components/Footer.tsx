import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <FileText className="h-8 w-8 text-warm-gray" />
              <span className="text-2xl font-bold text-warm-gray">УСДВ</span>
            </div>
            <p className="text-gray-300 mb-6">
              Упрощённая Система Документоведения для безопасных сделок между физическими и юридическими лицами с гарантией.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Логистика
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Тарифы
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-warm-gray transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Личный кабинет
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Карта сайта
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Правовая информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-warm-gray transition-colors">
                  Политика использования файлов cookie
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-warm-gray flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">info@usdv.ru</span>
              </li>
              <li className="mt-4">
                <Link to="/contact" className="btn btn-secondary btn-sm">
                  Связаться с нами
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} УСДВ - Упрощённая Система Документоведения. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;