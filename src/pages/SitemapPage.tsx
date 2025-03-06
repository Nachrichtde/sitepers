import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  User, 
  CreditCard, 
  Truck, 
  HelpCircle, 
  Mail, 
  Shield, 
  Scale
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Главные страницы',
      icon: <Home className="h-5 w-5 text-warm-gray" />,
      links: [
        { name: 'Главная', url: '/' },
        { name: 'Логистика', url: '/logistics' },
        { name: 'Тарифы', url: '/pricing' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Контакты', url: '/contact' }
      ]
    },
    {
      title: 'Личный кабинет',
      icon: <User className="h-5 w-5 text-warm-gray" />,
      links: [
        { name: 'Вход / Регистрация', url: '/login' },
        { name: 'Панель управления', url: '/dashboard' },
        { name: 'Мои сделки', url: '/dashboard/deals' },
        { name: 'Документы', url: '/dashboard/documents' },
        { name: 'История транзакций', url: '/dashboard/history' },
        { name: 'Доставка', url: '/dashboard/delivery' },
        { name: 'Уведомления', url: '/dashboard/notifications' },
        { name: 'Справка', url: '/dashboard/help' },
        { name: 'Настройки', url: '/dashboard/settings' }
      ]
    },
    {
      title: 'Правовая информация',
      icon: <Scale className="h-5 w-5 text-warm-gray" />,
      links: [
        { name: 'Условия использования', url: '/terms' },
        { name: 'Политика конфиденциальности', url: '/privacy' },
        { name: 'Политика использования файлов cookie', url: '/cookies' }
      ]
    },
    {
      title: 'Информация о сервисе',
      icon: <FileText className="h-5 w-5 text-warm-gray" />,
      links: [
        { name: 'О сервисе', url: '/#benefits' },
        { name: 'Преимущества', url: '/#benefits' },
        { name: 'Примеры использования', url: '/#examples' },
        { name: 'Партнеры', url: '/#partners' },
        { name: 'Почему мы', url: '/#why-us' }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-4">Карта сайта</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный список всех страниц и разделов сайта УСДВ для удобной навигации.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="heading-sm ml-2">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url} 
                      className="text-gray-700 hover:text-warm-gray transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="heading-md mb-8 text-center">Полная структура сайта</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Home className="h-5 w-5 text-warm-gray mr-2" />
                  <h3 className="font-semibold text-lg">Главная страница</h3>
                </div>
                <ul className="ml-7 space-y-2 border-l border-gray-200 pl-4">
                  <li><Link to="/#benefits" className="text-gray-700 hover:text-warm-gray">Преимущества</Link></li>
                  <li><Link to="/#examples" className="text-gray-700 hover:text-warm-gray">Примеры использования</Link></li>
                  <li><Link to="/#partners" className="text-gray-700 hover:text-warm-gray">Партнеры</Link></li>
                  <li><Link to="/#why-us" className="text-gray-700 hover:text-warm-gray">Почему мы</Link></li>
                  <li><Link to="/#faq" className="text-gray-700 hover:text-warm-gray">Часто задаваемые вопросы</Link></li>
                  <li><Link to="/#contact" className="text-gray-700 hover:text-warm-gray">Контактная информация</Link></li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Truck className="h-5 w-5 text-warm-gray mr-2" />
                  <h3 className="font-semibold text-lg">Логистика</h3>
                </div>
                <ul className="ml-7 space-y-2 border-l border-gray-200 pl-4">
                  <li><Link to="/logistics#services" className="text-gray-700 hover:text-warm-gray">Логистические услуги</Link></li>
                  <li><Link to="/logistics" className="text-gray-700 hover:text-warm-gray">Как работает доставка</Link></li>
                  <li><Link to="/logistics" className="text-gray-700 hover:text-warm-gray">Логистические партнеры</Link></li>
                  <li><Link to="/logistics" className="text-gray-700 hover:text-warm-gray">География доставки</Link></li>
                  <li><Link to="/logistics" className="text-gray-700 hover:text-warm-gray">FAQ по доставке</Link></li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <CreditCard className="h-5 w-5 text-warm-gray mr-2" />
                  <h3 className="font-semibold text-lg">Тарифы</h3>
                </div>
                <ul className="ml-7 space-y-2 border-l border-gray-200 pl-4">
                  <li><Link to="/pricing" className="text-gray-700 hover:text-warm-gray">Тарифные планы</Link></li>
                  <li><Link to="/pricing" className="text-gray-700 hover:text-warm-gray">Сравнение тарифов</Link></li>
                  <li><Link to="/pricing" className="text-gray-700 hover:text-warm-gray">Корпоративные решения</Link></li>
                  <li><Link to="/pricing" className="text-gray-700 hover:text-warm-gray">FAQ по тарифам</Link></li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-5 w-5 text-warm-gray mr-2" />
                  <h3 className="font-semibold text-lg">FAQ</h3>
                </div>
                <ul className="ml-7 space-y-2 border-l border-gray-200 pl-4">
                  <li><Link to="/faq" className="text-gray-700 hover:text-warm-gray">Процесс сделки</Link></li>
                  <li><Link to="/faq" className="text-gray-700 hover:text-warm-gray">Безопасность</Link></li>
                  <li><Link to="/faq" className="text-gray-700 hover:text-warm-gray">Доставка</Link></li>
                  <li><Link to="/faq" className="text-gray-700 hover:text-warm-gray">Оплата</Link></li>
                  <li><Link to="/faq" className="text-gray-700 hover:text-warm-gray">Аккаунт</Link></li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-warm-gray mr-2" />
                  <h3 className="font-semibold text-lg">Контакты</h3>
                </div>
                <ul className="ml-7 space-y-2 border-l border-gray-200 pl-4">
                  <li><Link to="/contact" className="text-gray-700 hover:text-warm-gray">Контактная форма</Link></li>
                  <li><Link to="/contact" className="text-gray-700 hover:text-warm-gray">Контактная информация</Link></li>
                  <li><Link to="/contact" className="text-gray-700 hover:text-warm-gray">Карта офиса</Link></li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <User className="h-5 w-5 text-warm-gray mr-2" />
                  <h3 className="font-semibold text-lg">Личный кабинет</h3>
                </div>
                <ul className="ml-7 space-y-2 border-l border-gray-200 pl-4">
                  <li><Link to="/login" className="text-gray-700 hover:text-warm-gray">Вход / Регистрация</Link></li>
                  <li><Link to="/dashboard" className="text-gray-700 hover:text-warm-gray">Панель управления</Link></li>
                  <li><Link to="/dashboard/deals" className="text-gray-700 hover:text-warm-gray">Мои сделки</Link></li>
                  <li><Link to="/dashboard/documents" className="text-gray-700 hover:text-warm-gray">Документы</Link></li>
                  <li><Link to="/dashboard/history" className="text-gray-700 hover:text-warm-gray">История транзакций</Link></li>
                  <li><Link to="/dashboard/delivery" className="text-gray-700 hover:text-warm-gray">Доставка</Link></li>
                  <li><Link to="/dashboard/notifications" className="text-gray-700 hover:text-warm-gray">Уведомления</Link></li>
                  <li><Link to="/dashboard/help" className="text-gray-700 hover:text-warm-gray">Справка</Link></li>
                  <li><Link to="/dashboard/settings" className="text-gray-700 hover:text-warm-gray">Настройки</Link></li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="h-5 w-5 text-warm-gray mr-2" />
                  <h3 className="font-semibold text-lg">Правовая информация</h3>
                </div>
                <ul className="ml-7 space-y-2 border-l border-gray-200 pl-4">
                  <li><Link to="/terms" className="text-gray-700 hover:text-warm-gray">Условия использования</Link></li>
                  <li><Link to="/privacy" className="text-gray-700 hover:text-warm-gray">Политика конфиденциальности</Link></li>
                  <li><Link to="/cookies" className="text-gray-700 hover:text-warm-gray">Политика использования файлов cookie</Link></li>
                  <li><Link to="/license" className="text-gray-700 hover:text-warm-gray">Лицензионное соглашение</Link></li>
                  <li><Link to="/refund" className="text-gray-700 hover:text-warm-gray">Политика возврата средств</Link></li>
                  <li><Link to="/legal" className="text-gray-700 hover:text-warm-gray">Юридическая информация</Link></li>
                  <li><Link to="/compliance" className="text-gray-700 hover:text-warm-gray">Соответствие требованиям</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;