import React, { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import TransactionFilters from '../../components/dashboard/TransactionFilters';

const HistoryPage: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    {
      id: 'TRX-1001',
      dealId: 'SD-2345',
      dealTitle: 'Продажа iPhone 13 Pro',
      type: 'Оплата',
      amount: '75 000 ₽',
      status: 'Успешно',
      statusClass: 'bg-green-100 text-green-800',
      date: '15.03.2025 14:32',
      paymentMethod: 'Банковская карта',
      paymentDetails: '**** 4567',
      description: 'Оплата по сделке #SD-2345'
    },
    {
      id: 'TRX-1002',
      dealId: 'SD-2344',
      dealTitle: 'Аренда квартиры',
      type: 'Оплата',
      amount: '45 000 ₽',
      status: 'В обработке',
      statusClass: 'bg-yellow-100 text-yellow-800',
      date: '10.03.2025 11:15',
      paymentMethod: 'Банковская карта',
      paymentDetails: '**** 7890',
      description: 'Оплата по сделке #SD-2344'
    },
    {
      id: 'TRX-1003',
      dealId: 'SD-2343',
      dealTitle: 'Продажа велосипеда',
      type: 'Оплата',
      amount: '35 000 ₽',
      status: 'Успешно',
      statusClass: 'bg-green-100 text-green-800',
      date: '05.03.2025 09:45',
      paymentMethod: 'Система быстрых платежей',
      paymentDetails: '+7 (900) 123-45-67',
      description: 'Оплата по сделке #SD-2343'
    },
    {
      id: 'TRX-1004',
      dealId: 'SD-2342',
      dealTitle: 'Продажа ноутбука',
      type: 'Оплата',
      amount: '120 000 ₽',
      status: 'Успешно',
      statusClass: 'bg-green-100 text-green-800',
      date: '01.03.2025 16:20',
      paymentMethod: 'Банковская карта',
      paymentDetails: '**** 1234',
      description: 'Оплата по сделке #SD-2342'
    },
    {
      id: 'TRX-1005',
      dealId: 'SD-2341',
      dealTitle: 'Продажа мебели',
      type: 'Оплата',
      amount: '25 000 ₽',
      status: 'Успешно',
      statusClass: 'bg-green-100 text-green-800',
      date: '25.02.2025 13:10',
      paymentMethod: 'Система быстрых платежей',
      paymentDetails: '+7 (900) 987-65-43',
      description: 'Оплата по сделке #SD-2341'
    }
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApplyFilters = (filters: any) => {
    // Here would be the logic to apply filters
    setIsFiltersOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="heading-lg">История транзакций</h1>
        <div className="flex space-x-2">
          <button className="btn btn-secondary flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Экспорт
          </button>
          <button 
            className="btn btn-secondary flex items-center"
            onClick={() => setIsFiltersOpen(true)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Фильтры
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по транзакциям..."
                className="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сделка</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сумма</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Способ оплаты</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{transaction.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="font-medium">#{transaction.dealId}</div>
                      <div className="text-xs">{transaction.dealTitle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{transaction.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.statusClass}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="font-medium">{transaction.paymentMethod}</div>
                      <div className="text-xs">{transaction.paymentDetails}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Показано {paginatedTransactions.length} из {transactions.length} транзакций
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

      <TransactionFilters
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default HistoryPage;