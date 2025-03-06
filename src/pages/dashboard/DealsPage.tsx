import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter, Download, Plus, BarChart, TrendingUp, TrendingDown, DollarSign, Clock } from 'lucide-react';
import CreateDealModal from '../../components/dashboard/CreateDealModal';

const DealsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  
  const deals = [
    {
      id: 'SD-2345',
      title: 'Продажа iPhone 13 Pro',
      description: 'Продажа смартфона Apple iPhone 13 Pro, 256 ГБ, цвет: графитовый, полный комплект, гарантия до 10.2025',
      amount: '75 000 ₽',
      status: 'Завершена',
      statusClass: 'bg-green-100 text-green-800',
      date: '15.03.2025',
      counterparty: 'Козлов Иван Иванович',
      documents: 3,
      type: 'Купля-продажа'
    },
    {
      id: 'SD-2344',
      title: 'Аренда квартиры',
      description: 'Аренда однокомнатной квартиры по адресу: г. Москва, ул. Примерная, д. 1, кв. 123, срок аренды: 11 месяцев',
      amount: '45 000 ₽',
      status: 'В процессе',
      statusClass: 'bg-yellow-100 text-yellow-800',
      date: '10.03.2025',
      counterparty: 'Сидорова Анна Петровна',
      documents: 2,
      type: 'Аренда'
    },
    {
      id: 'SD-2343',
      title: 'Продажа велосипеда',
      description: 'Продажа горного велосипеда Trek Marlin 7, размер рамы L, модель 2024 года, пробег 500 км',
      amount: '35 000 ₽',
      status: 'Доставка',
      statusClass: 'bg-blue-100 text-blue-800',
      date: '05.03.2025',
      counterparty: 'Петров Петр Петрович',
      documents: 2,
      type: 'Купля-продажа'
    },
    {
      id: 'SD-2342',
      title: 'Продажа ноутбука',
      description: 'Продажа ноутбука Lenovo ThinkPad X1 Carbon, i7, 16 ГБ ОЗУ, 512 ГБ SSD, состояние отличное',
      amount: '120 000 ₽',
      status: 'В процессе',
      statusClass: 'bg-yellow-100 text-yellow-800',
      date: '01.03.2025',
      counterparty: 'Иванова Елена Павловна',
      documents: 2,
      type: 'Купля-продажа'
    },
    {
      id: 'SD-2341',
      title: 'Продажа мебели',
      description: 'Продажа дивана IKEA KIVIK, 3-местный, цвет: бежевый, состояние хорошее, без повреждений',
      amount: '25 000 ₽',
      status: 'Завершена',
      statusClass: 'bg-green-100 text-green-800',
      date: '25.02.2025',
      counterparty: 'Смирнов Алексей Владимирович',
      documents: 3,
      type: 'Купля-продажа'
    }
  ];

  // Calculate statistics
  const totalDeals = deals.length;
  const completedDeals = deals.filter(deal => deal.status === 'Завершена').length;
  const activeDeals = deals.filter(deal => deal.status === 'В процессе' || deal.status === 'Доставка').length;
  const totalAmount = deals.reduce((sum, deal) => sum + parseInt(deal.amount.replace(/[^\d]/g, '')), 0);
  const completedAmount = deals
    .filter(deal => deal.status === 'Завершена')
    .reduce((sum, deal) => sum + parseInt(deal.amount.replace(/[^\d]/g, '')), 0);
  const avgDealAmount = Math.round(totalAmount / totalDeals);
  const successRate = Math.round((completedDeals / totalDeals) * 100);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(deals.length / itemsPerPage);

  const filteredDeals = activeTab === 'all' 
    ? deals 
    : deals.filter(deal => {
        if (activeTab === 'active') return deal.status === 'В процессе' || deal.status === 'Доставка';
        if (activeTab === 'completed') return deal.status === 'Завершена';
        if (activeTab === 'purchase') return deal.type === 'Купля-продажа';
        if (activeTab === 'rent') return deal.type === 'Аренда';
        return true;
      });

  const paginatedDeals = filteredDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="heading-lg">Мои сделки</h1>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="btn btn-primary flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Создать новую сделку
        </button>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Всего сделок</p>
                <h3 className="text-2xl font-bold">{totalDeals}</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Активных: {activeDeals}</span>
            <span className="text-gray-500">Завершенных: {completedDeals}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-3">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Общая сумма</p>
                <h3 className="text-2xl font-bold">{totalAmount.toLocaleString()} ₽</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Средняя: {avgDealAmount.toLocaleString()} ₽</span>
            <span className="text-green-500">
              <TrendingUp className="h-4 w-4 inline-block mr-1" />
              +15%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Активные сделки</p>
                <h3 className="text-2xl font-bold">{activeDeals}</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">В процессе: {deals.filter(d => d.status === 'В процессе').length}</span>
            <span className="text-gray-500">Доставка: {deals.filter(d => d.status === 'Доставка').length}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Успешность</p>
                <h3 className="text-2xl font-bold">{successRate}%</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Завершено: {completedDeals}</span>
            <span className="text-purple-500">
              <TrendingUp className="h-4 w-4 inline-block mr-1" />
              +5%
            </span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'all'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Все сделки
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'active'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Активные
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'completed'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Завершенные
            </button>
            <button
              onClick={() => setActiveTab('purchase')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'purchase'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Купля-продажа
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'rent'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Аренда
            </button>
          </nav>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <button className="btn btn-secondary flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </button>
              <button className="btn btn-secondary flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Экспорт
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Название</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сумма</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Действия</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedDeals.map((deal) => (
                  <tr key={deal.id} className={selectedDeal === deal.id ? 'bg-warm-gray bg-opacity-5' : ''}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">#{deal.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="font-medium">{deal.title}</div>
                      <div className="text-gray-500 truncate max-w-xs">{deal.description}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{deal.amount}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${deal.statusClass}`}>
                        {deal.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{deal.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <button 
                        onClick={() => setSelectedDeal(selectedDeal === deal.id ? null : deal.id)}
                        className="text-warm-gray font-medium hover:underline"
                      >
                        Подробнее
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Показано {paginatedDeals.length} из {filteredDeals.length} сделок
            </div>
            <div className="flex space-x-2">
              <button 
                className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Предыдущая
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    currentPage === page
                      ? 'bg-warm-gray text-white'
                      : 'border border-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Следующая
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedDeal && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="heading-md mb-4">Информация о сделке</h2>
          
          {deals.filter(deal => deal.id === selectedDeal).map((deal) => (
            <div key={deal.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Основная информация</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500">ID сделки</div>
                        <div className="font-medium">#{deal.id}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Тип сделки</div>
                        <div className="font-medium">{deal.type}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Статус</div>
                        <div className="font-medium">{deal.status}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Дата создания</div>
                        <div className="font-medium">{deal.date}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Сумма</div>
                        <div className="font-medium">{deal.amount}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Документы</div>
                        <div className="font-medium">{deal.documents} шт.</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Контрагент</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="mb-4">
                      <div className="text-xs text-gray-500">ФИО</div>
                      <div className="font-medium">{deal.counterparty}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-xs text-gray-500">Верификация</div>
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Подтвержден через Госуслуги
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="text-warm-gray font-medium text-sm hover:underline">
                        Написать сообщение
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <div className="space-x-2">
                  <button className="btn btn-secondary btn-sm">
                    Документы сделки
                  </button>
                  <button className="btn btn-secondary btn-sm">
                    История изменений
                  </button>
                </div>
                {deal.status === 'В процессе' && (
                  <button className="btn btn-primary btn-sm">
                    Продолжить сделку
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <CreateDealModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default DealsPage;