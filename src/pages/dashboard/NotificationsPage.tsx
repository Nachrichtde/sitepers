import React, { useState } from 'react';
import { 
  Bell, 
  FileSignature, 
  Truck, 
  CreditCard, 
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

const NotificationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'document',
      title: 'Документ ожидает подписания',
      description: 'Договор купли-продажи iPhone 13 Pro требует вашей подписи',
      date: '2 часа назад',
      icon: <FileSignature className="h-5 w-5 text-blue-600" />,
      iconBg: 'bg-blue-100',
      isRead: false,
      link: '/dashboard/documents'
    },
    {
      id: 2,
      type: 'delivery',
      title: 'Посылка доставлена',
      description: 'Заказ #SD-2345 успешно доставлен получателю',
      date: 'Вчера, 15:30',
      icon: <Truck className="h-5 w-5 text-green-600" />,
      iconBg: 'bg-green-100',
      isRead: false,
      link: '/dashboard/delivery'
    },
    {
      id: 3,
      type: 'deal',
      title: 'Новое предложение по сделке',
      description: 'Получено новое предложение по сделке #SD-2344',
      date: '20.03.2025, 10:15',
      icon: <Bell className="h-5 w-5 text-yellow-600" />,
      iconBg: 'bg-yellow-100',
      isRead: true,
      link: '/dashboard/deals'
    },
    {
      id: 4,
      type: 'payment',
      title: 'Успешный платеж',
      description: 'Оплата по сделке #SD-2343 успешно проведена',
      date: '19.03.2025, 14:20',
      icon: <CreditCard className="h-5 w-5 text-green-600" />,
      iconBg: 'bg-green-100',
      isRead: true,
      link: '/dashboard/history'
    },
    {
      id: 5,
      type: 'message',
      title: 'Новое сообщение',
      description: 'Получено новое сообщение от контрагента по сделке #SD-2342',
      date: '18.03.2025, 09:45',
      icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
      iconBg: 'bg-blue-100',
      isRead: true,
      link: '#'
    }
  ];

  const filteredNotifications = activeTab === 'all'
    ? notifications
    : notifications.filter(notification => {
        if (activeTab === 'unread') return !notification.isRead;
        return notification.type === activeTab;
      });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="heading-lg">Уведомления</h1>
        <button className="btn btn-secondary">
          Отметить все как прочитанные
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md">
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
              Все
            </button>
            <button
              onClick={() => setActiveTab('unread')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'unread'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Непрочитанные
            </button>
            <button
              onClick={() => setActiveTab('document')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'document'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Документы
            </button>
            <button
              onClick={() => setActiveTab('delivery')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'delivery'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Доставка
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'payment'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Платежи
            </button>
          </nav>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredNotifications.length === 0 ? (
            <div className="p-6 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Нет уведомлений</h3>
              <p className="text-gray-500">
                В этой категории пока нет уведомлений
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 transition-colors ${
                  !notification.isRead ? 'bg-warm-gray bg-opacity-5' : ''
                }`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 rounded-full p-2 ${notification.iconBg}`}>
                    {notification.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-500">{notification.date}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {notification.description}
                    </p>
                    <div className="mt-2">
                      <a
                        href={notification.link}
                        className="text-sm text-warm-gray hover:underline"
                      >
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Настройки уведомлений</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-warm-gray mr-3" />
              <div>
                <div className="font-medium">Push-уведомления</div>
                <div className="text-sm text-gray-500">Мгновенные уведомления в браузере</div>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-warm-gray peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-warm-gray"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-warm-gray mr-3" />
              <div>
                <div className="font-medium">Email-уведомления</div>
                <div className="text-sm text-gray-500">Получать уведомления на email</div>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-warm-gray peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-warm-gray"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;