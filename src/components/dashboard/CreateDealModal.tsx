import React, { useState } from 'react';
import { X, Building2, User, Truck } from 'lucide-react';

interface CreateDealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateDealModal: React.FC<CreateDealModalProps> = ({ isOpen, onClose }) => {
  const [clientType, setClientType] = useState<'individual' | 'business' | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Individual Client Info
    fullName: '',
    email: '',
    phone: '',
    passport: '',
    address: '',
    
    // Deal Info
    dealTitle: '',
    dealType: '',
    dealAmount: '',
    description: '',
    needsDelivery: false,
    
    // Business Info
    inn: '',
    companyName: '',
    ogrn: '',
    kpp: '',
    legalAddress: '',
    actualAddress: '',
    ceo: '',
    position: '',
    actingOn: '',
    bankAccount: '',
    bankName: '',
    bik: '',
    correspondentAccount: '',
    
    // Delivery Info
    deliveryType: '',
    fromAddress: '',
    toAddress: '',
    weight: '',
    dimensions: '',
    deliveryDate: '',
    deliveryTime: ''
  });

  const dealTypes = [
    { value: 'purchase', label: 'Купля-продажа' },
    { value: 'rent', label: 'Аренда' },
    { value: 'service', label: 'Услуги' },
    { value: 'supply', label: 'Поставка' },
    { value: 'contractor', label: 'Подряд' },
    { value: 'other', label: 'Другое' }
  ];

  const deliveryTypes = [
    { value: 'courier', label: 'Курьерская доставка' },
    { value: 'pickup', label: 'Самовывоз' },
    { value: 'transport', label: 'Транспортная компания' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the API call to create the deal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Создание сделки</h2>
          <p className="text-gray-600 mt-2">Выберите тип клиента и заполните необходимые данные</p>
        </div>

        {!clientType ? (
          <div className="grid grid-cols-2 gap-6">
            <button
              onClick={() => {
                setClientType('individual');
                setStep(1);
              }}
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-warm-gray transition-colors flex flex-col items-center text-center"
            >
              <User className="h-12 w-12 text-warm-gray mb-4" />
              <h3 className="text-lg font-medium mb-2">Для физических лиц</h3>
              <p className="text-gray-600 text-sm">Создание сделки между физическими лицами</p>
            </button>
            <button
              onClick={() => {
                setClientType('business');
                setStep(1);
              }}
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-warm-gray transition-colors flex flex-col items-center text-center"
            >
              <Building2 className="h-12 w-12 text-warm-gray mb-4" />
              <h3 className="text-lg font-medium mb-2">Для юридических лиц</h3>
              <p className="text-gray-600 text-sm">Создание сделки с юридическим лицом</p>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {clientType === 'individual' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Информация о клиенте</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ФИО
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                      required
                    />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mt-8">Информация о сделке</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Название сделки
                  </label>
                  <input
                    type="text"
                    name="dealTitle"
                    value={formData.dealTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Тип сделки
                  </label>
                  <select
                    name="dealType"
                    value={formData.dealType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    required
                  >
                    <option value="">Выберите тип сделки</option>
                    {dealTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сумма сделки
                  </label>
                  <input
                    type="number"
                    name="dealAmount"
                    value={formData.dealAmount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Описание
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                    required
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="needsDelivery"
                    name="needsDelivery"
                    checked={formData.needsDelivery}
                    onChange={handleChange}
                    className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                  />
                  <label htmlFor="needsDelivery" className="ml-2 block text-sm text-gray-900">
                    Требуется доставка
                  </label>
                </div>

                {formData.needsDelivery && (
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-6 w-6 text-warm-gray" />
                      <h3 className="text-lg font-medium">Информация о доставке</h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Способ доставки
                      </label>
                      <select
                        name="deliveryType"
                        value={formData.deliveryType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      >
                        <option value="">Выберите способ доставки</option>
                        {deliveryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Адрес отправления
                        </label>
                        <input
                          type="text"
                          name="fromAddress"
                          value={formData.fromAddress}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Адрес доставки
                        </label>
                        <input
                          type="text"
                          name="toAddress"
                          value={formData.toAddress}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Вес (кг)
                        </label>
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Габариты (см)
                        </label>
                        <input
                          type="text"
                          name="dimensions"
                          value={formData.dimensions}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          placeholder="ДxШxВ"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Дата доставки
                        </label>
                        <input
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Время доставки
                        </label>
                        <select
                          name="deliveryTime"
                          value={formData.deliveryTime}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        >
                          <option value="">Выберите время</option>
                          <option value="morning">09:00 - 13:00</option>
                          <option value="afternoon">13:00 - 18:00</option>
                          <option value="evening">18:00 - 22:00</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {clientType === 'business' && (
              <div>
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900">Основная информация о компании</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ИНН
                        </label>
                        <input
                          type="text"
                          name="inn"
                          value={formData.inn}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ОГРН
                        </label>
                        <input
                          type="text"
                          name="ogrn"
                          value={formData.ogrn}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Наименование организации
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        КПП
                      </label>
                      <input
                        type="text"
                        name="kpp"
                        value={formData.kpp}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Юридический адрес
                      </label>
                      <input
                        type="text"
                        name="legalAddress"
                        value={formData.legalAddress}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Фактический адрес
                      </label>
                      <input
                        type="text"
                        name="actualAddress"
                        value={formData.actualAddress}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Генеральный директор
                        </label>
                        <input
                          type="text"
                          name="ceo"
                          value={formData.ceo}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Должность подписанта
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Действует на основании
                      </label>
                      <input
                        type="text"
                        name="actingOn"
                        value={formData.actingOn}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        placeholder="Устава, доверенности №... от..."
                        required
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900">Банковские реквизиты</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Расчетный счет
                      </label>
                      <input
                        type="text"
                        name="bankAccount"
                        value={formData.bankAccount}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Наименование банка
                      </label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          БИК
                        </label>
                        <input
                          type="text"
                          name="bik"
                          value={formData.bik}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Корр. счет
                        </label>
                        <input
                          type="text"
                          name="correspondentAccount"
                          value={formData.correspondentAccount}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900">Информация о сделке</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Название сделки
                      </label>
                      <input
                        type="text"
                        name="dealTitle"
                        value={formData.dealTitle}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Тип сделки
                      </label>
                      <select
                        name="dealType"
                        value={formData.dealType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      >
                        <option value="">Выберите тип сделки</option>
                        {dealTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Сумма сделки
                      </label>
                      <input
                        type="number"
                        name="dealAmount"
                        value={formData.dealAmount}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Описание
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      />
                    </div>

                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        id="needsDelivery"
                        name="needsDelivery"
                        checked={formData.needsDelivery}
                        onChange={handleChange}
                        className="h-4 w-4 text-warm-gray focus:ring-warm-gray border-gray-300 rounded"
                      />
                      <label htmlFor="needsDelivery" className="ml-2 block text-sm text-gray-900">
                        Требуется доставка
                      </label>
                    </div>
                  </div>
                )}

                {step === 4 && formData.needsDelivery && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-6 w-6 text-warm-gray" />
                      <h3 className="text-lg font-medium">Информация о доставке</h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Способ доставки
                      </label>
                      <select
                        name="deliveryType"
                        value={formData.deliveryType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                        required
                      >
                        <option value="">Выберите способ доставки</option>
                        {deliveryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Адрес отправления
                        </label>
                        <input
                          type="text"
                          name="fromAddress"
                          value={formData.fromAddress}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Адрес доставки
                        </label>
                        <input
                          type="text"
                          name="toAddress"
                          value={formData.toAddress}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Вес (кг)
                        </label>
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Габариты (см)
                        </label>
                        <input
                          type="text"
                          name="dimensions"
                          value={formData.dimensions}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          placeholder="ДxШxВ"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Дата доставки
                        </label>
                        <input
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Время доставки
                        </label>
                        <select
                          name="deliveryTime"
                          value={formData.deliveryTime}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gray"
                          required
                        >
                          <option value="">Выберите время</option>
                          <option value="morning">09:00 - 13:00</option>
                          <option value="afternoon">13:00 - 18:00</option>
                          <option value="evening">18:00 - 22:00</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => {
                  if (step > 1) {
                    setStep(step - 1);
                  } else {
                    setClientType(null);
                    setStep(1);
                  }
                }}
                className="btn btn-secondary"
              >
                Назад
              </button>
              {clientType === 'business' ? (
                step < (formData.needsDelivery ? 4 : 3) ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="btn btn-primary"
                  >
                    Далее
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Создать сделку
                  </button>
                )
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Создать сделку
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateDealModal;