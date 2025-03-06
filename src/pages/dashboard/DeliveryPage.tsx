import React, { useState } from 'react';
import { Truck, Package, Search, Filter, Plus } from 'lucide-react';
import DeliveryRequestModal from '../../components/dashboard/DeliveryRequestModal';

const DeliveryPage: React.FC = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const deliveries = [
    {
      id: 'DLV-1001',
      dealId: 'SD-2343',
      dealTitle: 'Продажа велосипеда',
      type: 'Крупногабаритный груз',
      status: 'В пути',
      statusClass: 'bg-blue-100 text-blue-800',
      trackingNumber: '1234567890',
      carrier: 'СДЭК',
      fromAddress: 'Москва, ул. Ленина, 1',
      toAddress: 'Санкт-Петербург, ул. Невская, 15',
      estimatedDelivery: '07.03.2025',
      currentLocation: 'Тверь',
      lastUpdate: '05.03.2025 15:30'
    },
    {
      id: 'DLV-1002',
      dealId: 'SD-2342',
      dealTitle: 'Продажа ноутбука',
      type: 'Ценный груз',
      status: 'Ожидает отправки',
      statusClass: 'bg-yellow-100 text-yellow-800',
      trackingNumber: '0987654321',
      carrier: 'Яндекс.Доставка',
      fromAddress: 'Москва, ул. Пушкина, 10',
      toAddress: 'Москва, ул. Гоголя, 5',
      estimatedDelivery: '06.03.2025',
      currentLocation: 'Москва',
      lastUpdate: '05.03.2025 12:00'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="heading-lg">Доставка</h1>
        <button 
          onClick={() => setIsRequestModalOpen(true)}
          className="btn btn-primary flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Создать заявку
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Всего отправлений</h3>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>В этом месяце</span>
            <span className="text-green-500">+2 новых</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-full p-3">
                <Truck className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">В пути</h3>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Среднее время доставки</span>
            <span>2.5 дня</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-3">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Доставлено</h3>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Успешных доставок</span>
            <span className="text-green-500">100%</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold mb-4 sm:mb-0">Мои отправления</h2>
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск по номеру..."
                  className="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="btn btn-secondary flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Отправление
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Сделка
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Служба доставки
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Дата доставки
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Package className="h-6 w-6 text-warm-gray" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {delivery.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {delivery.type}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">#{delivery.dealId}</div>
                    <div className="text-sm text-gray-500">{delivery.dealTitle}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${delivery.statusClass}`}>
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {delivery.carrier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {delivery.estimatedDelivery}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-warm-gray hover:text-warm-gray hover:underline">
                      Отследить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeliveryRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </div>
  );
};

export default DeliveryPage;