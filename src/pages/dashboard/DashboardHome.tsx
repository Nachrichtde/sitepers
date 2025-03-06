import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  Truck, 
  Bell, 
  FileSignature,
  ChevronRight 
} from 'lucide-react';

const DashboardHome: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="heading-lg mb-6">Панель управления</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="card bg-warm-gray bg-opacity-10 border border-warm-gray border-opacity-20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="heading-sm">Активные сделки</h3>
            <span className="text-2xl font-bold text-warm-gray">3</span>
          </div>
          <p className="text-gray-600 mb-4">У вас 3 активные сделки, требующие вашего внимания</p>
          <Link to="/dashboard/deals" className="text-warm-gray font-medium flex items-center hover:underline">
            Перейти к сделкам <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="card bg-warm-gray bg-opacity-10 border border-warm-gray border-opacity-20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="heading-sm">Документы</h3>
            <span className="text-2xl font-bold text-warm-gray">12</span>
          </div>
          <p className="text-gray-600 mb-4">У вас 12 документов, ожидающих подписания</p>
          <Link to="/dashboard/documents" className="text-warm-gray font-medium flex items-center hover:underline">
            Перейти к документам <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="card bg-warm-gray bg-opacity-10 border border-warm-gray border-opacity-20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="heading-sm">Доставка</h3>
            <span className="text-2xl font-bold text-warm-gray">2</span>
          </div>
          <p className="text-gray-600 mb-4">2 отправления в пути, ожидают получения</p>
          <Link to="/dashboard/delivery" className="text-warm-gray font-medium flex items-center hover:underline">
            Отследить доставку <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card mb-6">
            <h3 className="heading-sm mb-4">Последние сделки</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Описание</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сумма</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">#SD-2345</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Продажа iPhone 13 Pro</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">75 000 ₽</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Завершена
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">15.03.2025</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">#SD-2344</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Аренда квартиры</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">45 000 ₽</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        В процессе
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">10.03.2025</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">#SD-2343</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Продажа велосипеда</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">35 000 ₽</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Доставка
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">05.03.2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <Link to="/dashboard/deals" className="text-warm-gray font-medium hover:underline">
                Все сделки
              </Link>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="card mb-6">
            <h3 className="heading-sm mb-4">Уведомления</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 pb-3 border-b border-gray-100">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                  <FileSignature className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Документ ожидает подписания</p>
                  <p className="text-xs text-gray-500">2 часа назад</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 pb-3 border-b border-gray-100">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-1">
                  <Truck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Посылка доставлена</p>
                  <p className="text-xs text-gray-500">Вчера, 15:30</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-yellow-100 rounded-full p-1">
                  <Bell className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Новое предложение по сделке</p>
                  <p className="text-xs text-gray-500">20.03.2025, 10:15</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 text-right">
              <Link to="/dashboard/notifications" className="text-warm-gray font-medium hover:underline">
                Все уведомления
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;