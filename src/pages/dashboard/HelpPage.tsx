import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  Book, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  FileText,
  Shield,
  CreditCard,
  Truck,
  User,
  Mail
} from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started']);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Начало работы',
      icon: <User className="h-6 w-6 text-warm-gray" />,
      articles: [
        {
          title: 'Как создать аккаунт',
          description: 'Пошаговая инструкция по регистрации на платформе УСДВ',
          link: '#'
        },
        {
          title: 'Верификация через Госуслуги',
          description: 'Процесс подтверждения личности через портал государственных услуг',
          link: '#'
        },
        {
          title: 'Создание первой сделки',
          description: 'Руководство по созданию и проведению вашей первой сделки',
          link: '#'
        }
      ]
    },
    {
      id: 'security',
      title: 'Безопасность',
      icon: <Shield className="h-6 w-6 text-warm-gray" />,
      articles: [
        {
          title: 'Двухфакторная аутентификация',
          description: 'Как настроить дополнительную защиту вашего аккаунта',
          link: '#'
        },
        {
          title: 'Безопасные платежи',
          description: 'Информация о системе эскроу и защите платежей',
          link: '#'
        },
        {
          title: 'Проверка контрагентов',
          description: 'Как проверить надежность второй стороны сделки',
          link: '#'
        }
      ]
    },
    {
      id: 'documents',
      title: 'Документы',
      icon: <FileText className="h-6 w-6 text-warm-gray" />,
      articles: [
        {
          title: 'Типы документов',
          description: 'Обзор всех типов документов, доступных на платформе',
          link: '#'
        },
        {
          title: 'Электронная подпись',
          description: 'Как подписывать документы электронной подписью',
          link: '#'
        },
        {
          title: 'Шаблоны документов',
          description: 'Использование готовых шаблонов для сделок',
          link: '#'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Платежи',
      icon: <CreditCard className="h-6 w-6 text-warm-gray" />,
      articles: [
        {
          title: 'Способы оплаты',
          description: 'Доступные методы оплаты и их особенности',
          link: '#'
        },
        {
          title: 'Комиссии и тарифы',
          description: 'Информация о стоимости услуг платформы',
          link: '#'
        },
        {
          title: 'Возврат средств',
          description: 'Процедура возврата средств при отмене сделки',
          link: '#'
        }
      ]
    },
    {
      id: 'delivery',
      title: 'Доставка',
      icon: <Truck className="h-6 w-6 text-warm-gray" />,
      articles: [
        {
          title: 'Способы доставки',
          description: 'Обзор доступных способов доставки товаров',
          link: '#'
        },
        {
          title: 'Отслеживание',
          description: 'Как отслеживать статус доставки в реальном времени',
          link: '#'
        },
        {
          title: 'Страхование грузов',
          description: 'Информация о страховании доставляемых товаров',
          link: '#'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredCategories = searchQuery
    ? helpCategories.map(category => ({
        ...category,
        articles: category.articles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.articles.length > 0)
    : helpCategories;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="heading-lg">Справочный центр</h1>
        <button className="btn btn-primary flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          Связаться с поддержкой
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Search */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по базе знаний..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Categories and Articles */}
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    {category.icon}
                    <h2 className="text-lg font-semibold ml-3">{category.title}</h2>
                  </div>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedCategories.includes(category.id) && (
                  <div className="p-6 space-y-4">
                    {category.articles.map((article, index) => (
                      <a
                        key={index}
                        href={article.link}
                        className="block p-4 rounded-lg border border-gray-200 hover:border-warm-gray transition-colors"
                      >
                        <h3 className="font-medium text-warm-gray mb-1">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.description}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          {/* Quick Help */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Быстрая помощь</h2>
            <div className="space-y-4">
              <button className="w-full p-4 rounded-lg border border-gray-200 hover:border-warm-gray transition-colors flex items-center">
                <MessageSquare className="h-5 w-5 text-warm-gray mr-3" />
                <div className="text-left">
                  <div className="font-medium">Чат с поддержкой</div>
                  <div className="text-sm text-gray-500">Среднее время ответа: 2 минуты</div>
                </div>
              </button>
              <button className="w-full p-4 rounded-lg border border-gray-200 hover:border-warm-gray transition-colors flex items-center">
                <Mail className="h-5 w-5 text-warm-gray mr-3" />
                <div className="text-left">
                  <div className="font-medium">Email поддержка</div>
                  <div className="text-sm text-gray-500">support@usdv.ru</div>
                </div>
              </button>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Популярные статьи</h2>
            <div className="space-y-3">
              <a href="#" className="block text-warm-gray hover:underline">Как создать сделку?</a>
              <a href="#" className="block text-warm-gray hover:underline">Способы верификации</a>
              <a href="#" className="block text-warm-gray hover:underline">Безопасность платежей</a>
              <a href="#" className="block text-warm-gray hover:underline">Отслеживание доставки</a>
              <a href="#" className="block text-warm-gray hover:underline">Электронная подпись</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;