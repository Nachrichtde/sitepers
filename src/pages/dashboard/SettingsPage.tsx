import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Lock, 
  CreditCard, 
  Mail, 
  Phone, 
  Shield,
  CheckCircle
} from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: true,
    deals: true,
    documents: true,
    delivery: true,
    payments: true
  });

  const handleNotificationChange = (setting: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="p-6">
      <h1 className="heading-lg mb-6">Настройки</h1>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'profile'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <User className="h-5 w-5 inline-block mr-2" />
              Профиль
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'notifications'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Bell className="h-5 w-5 inline-block mr-2" />
              Уведомления
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'security'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Lock className="h-5 w-5 inline-block mr-2" />
              Безопасность
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'payment'
                  ? 'border-warm-gray text-warm-gray'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <CreditCard className="h-5 w-5 inline-block mr-2" />
              Способы оплаты
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Личные данные</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="flex">
                      <input
                        type="email"
                        value="user@example.com"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        readOnly
                      />
                      <div className="ml-2 flex items-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Подтвержден
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <div className="flex">
                      <input
                        type="tel"
                        value="+7 (900) 123-45-67"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        readOnly
                      />
                      <div className="ml-2 flex items-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Подтвержден
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Верификация</h2>
                <div className="bg-green-50 p-4 rounded-lg flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <div>
                    <h3 className="text-green-800 font-medium">Аккаунт верифицирован</h3>
                    <p className="text-green-700 text-sm mt-1">
                      Ваша личность подтверждена через Госуслуги
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Способы уведомлений</h2>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={notificationSettings.email}
                      onChange={() => handleNotificationChange('email')}
                      className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                    />
                    <Mail className="h-5 w-5 text-gray-400 ml-3 mr-2" />
                    <span className="ml-2">Email-уведомления</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={notificationSettings.sms}
                      onChange={() => handleNotificationChange('sms')}
                      className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                    />
                    <Phone className="h-5 w-5 text-gray-400 ml-3 mr-2" />
                    <span className="ml-2">SMS-уведомления</span>
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Категории уведомлений</h2>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={notificationSettings.deals}
                      onChange={() => handleNotificationChange('deals')}
                      className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                    />
                    <span className="ml-2">Сделки</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={notificationSettings.documents}
                      onChange={() => handleNotificationChange('documents')}
                      className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                    />
                    <span className="ml-2">Документы</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={notificationSettings.delivery}
                      onChange={() => handleNotificationChange('delivery')}
                      className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                    />
                    <span className="ml-2">Доставка</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={notificationSettings.payments}
                      onChange={() => handleNotificationChange('payments')}
                      className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                    />
                    <span className="ml-2">Платежи</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Изменение пароля</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Текущий пароль
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Новый пароль
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Подтверждение нового пароля
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    />
                  </div>
                  <button className="btn btn-primary">
                    Изменить пароль
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Двухфакторная аутентификация</h2>
                <div className="bg-yellow-50 p-4 rounded-lg flex items-start">
                  <Shield className="h-5 w-5 text-yellow-500 mt-0.5 mr-3" />
                  <div>
                    <h3 className="text-yellow-800 font-medium">Рекомендуется включить</h3>
                    <p className="text-yellow-700 text-sm mt-1">
                      Двухфакторная аутентификация добавит дополнительный уровень безопасности вашему аккаунту
                    </p>
                    <button className="mt-2 text-yellow-800 font-medium hover:underline">
                      Настроить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Способы оплаты</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CreditCard className="h-8 w-8 text-warm-gray" />
                        <div className="ml-4">
                          <p className="font-medium">Мир **** 4567</p>
                          <p className="text-sm text-gray-500">Действует до 12/25</p>
                        </div>
                      </div>
                      <button className="text-warm-gray hover:underline">
                        Удалить
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-secondary w-full">
                    Добавить способ оплаты
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">История платежей</h2>
                <div className="border border-gray-200 rounded-lg divide-y">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Оплата по сделке #SD-2345</p>
                        <p className="text-sm text-gray-500">15.03.2025, 14:30</p>
                      </div>
                      <p className="font-medium">75 000 ₽</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Оплата по сделке #SD-2344</p>
                        <p className="text-sm text-gray-500">10.03.2025, 11:15</p>
                      </div>
                      <p className="font-medium">45 000 ₽</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;